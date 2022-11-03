import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../module/button";
import Swal from "sweetalert2";
import Skeleton from 'react-loading-skeleton'
import {getAllUser, deleteUser} from '../api/user';
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/action/countAction";


export default function User() {
  let navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  //state untuk menyimpan data user dari api

  const [page, setPage] = React.useState(150);
  // const [perPage, setPerPage] = React.useState(2);
  const [isFetchUser, setIsFetchUser] = React.useState(false)
  const store = useSelector((state)=>state)
  const count = useSelector((state)=>state.count)
  console.log('store=>', store)
  const dispatch = useDispatch()


  const getUserHandle = async () => {
    try {
      setIsFetchUser(true)
      const response = await getAllUser(page)
      console.log("response => ", response.data);
      setUsers(response.data.data);
    } catch (err) {

    }finally{
      setIsFetchUser(false)
    }
  };

  const deleteUserHandle = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteUser(id)
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          console.log("delete working", id);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      }
    });
  };

  // console.log("user => ", users);
  // console.log("page => ", page);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
      <h1>User who is accepted</h1>
      <Link to="/user/create" className="mr-5">
        <Button title={"Add User"} />
      </Link>
      <Button 
        title='Logout'
        onClick={() => {
          Cookies.remove("myapps_token")
          return navigate("/login", {replace:true})
        }}
      />
        <Button onClick={()=>{
              dispatch({
                type : "change",
                color : "#7cfc00"
              })
            }} color="green" title={'green'} />
            <Button onClick={()=>{
              dispatch({
                type : "change",
                color : "#806960"
              })
            }} color="brown" title={'bron'} />
            <Button  title={'back'} onClick={()=>{
              dispatch({
                type : "return",
                // color : "#7cfc00"
              })
            }} />
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left border">
            <th className="pr-5">No</th>
            <th className="pr-10">Username</th>
            <th className="pr-5">Nama</th>
            <th className="pr-5">Email</th>
            <th className="pr-5">Jenis Kelamin</th>
            <th className="pr-5">Dibuat</th>
            <th className="pr-5">Diupdate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {isFetchUser ? (
            <tr>
              <td colSpan={9}>
                <Skeleton
                  count={15}
                  highlightColor="#444"
                  height={40} //baseColor="grey" buat warna pas loading
                />
              </td>
            </tr>
          ) : (
            users.map((user, index) => {
              return (
                <tr key={index} className="border">
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.jenis_kelamin}</td>
                  <td>{user.stored_at}</td>
                  <td>{user.update_at}</td>
                  <td>
                    <Button
                      onClick={() => {
                        return navigate(`/user/update/${user.id}`);
                      }}
                      color="blue"
                      title={"Edit"}
                    />
                    <Button
                      onClick={() => {
                        deleteUserHandle(user.id);
                      }}
                      color="red"
                      title={"Delete"}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <p>Saat ini di Page {page}</p>
      <div className="border grid grid-cols-1 gap-5">
          
            <p> status : {count.status}</p>
            <p> value : {count.value}</p>
            <Button onClick={()=>{
              dispatch(increment())
            }} title={'tambah'}/>
            <Button onClick={()=>{
              dispatch(decrement())
            }}color="blue" title={'kurang'}/>
      </div>
    </div>
  );
}