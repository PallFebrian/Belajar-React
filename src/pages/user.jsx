import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function User() {
  const [users, setUsers] = React.useState([]); // state  untuk menyimpan data user dari API
  const [page, setPage] = React.useState(100);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`
      );
      console.log("response =>", response.data);
      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };

  console.log("user =>", users);
  console.log("page  =>", page);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div>
      <h1>Tabel User</h1>
      <button><Link to="/user/create"><p className="bg-blue-400">Tambah Use</p></Link></button>
      
      <table className="table-auto w-[1000px]">
        <thead>
          <tr className="text-left border">
            <th className="">No</th>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Name</th>
            <th>Jenis Kelamin</th>
            <th>Stored at</th>
            <th>Update at</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index} className="text-left border">
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.jenis_kelamin}</td>
                <td>{user.stored_at}</td>
                <td>{user.update_at}</td>
                {/* <td>
                  <img
                    className="rounded-full h-5 w-5"
                    src={user.avatar}
                    alt={users.avatar}
                  />
                </td> */}
                <td>Detail</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>saat ini di table {page}</p>

      <div className="flex items-center justify-center ">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previos
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
