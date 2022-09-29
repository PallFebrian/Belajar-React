import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../module/button";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import { getAllUser } from "../api/user";


export default function User() {
  let navigate = useNavigate();
  const [users, setUsers] = React.useState([]);   //state untuk menyimpan data user dari api
  const [page, setPage] = React.useState(100);
  const [isFetchUser, setIsFetchUser] = React.useState(false);


  const getUserHandle = async () => {
    try {
      setIsFetchUser(true);
      const response = await getAllUser(page)
      console.log("response => ", response.data);
      setUsers(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchUser(false);
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
          await axios.delete(
            `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id}`
          );

          Swal.fire("Deleted!", "User has been deleted.", "success");
          getUserHandle();
        } catch (err) {
          Swal.fire("Failed!", "User is undefined", "error");
        }
      }
    });
  };

  console.log("user => ", users);
  console.log("page => ", page);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
      <h1>User who is accepted</h1>
      <Link to="/user/create">Add User</Link>
      <table className="table-auto w-full ">
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

      <div className="flex items-center justify-center">
        <button
          className="mx-10"
          onClick={() => {
            console.log("running?");
            setPage(page - 1);
          }}
        >
          Previos
        </button>
        <button
          className="mx-10"
          onClick={() => {
            console.log("running?");
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
