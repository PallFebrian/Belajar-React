import Input from "../komponen/input";
import Button from "../komponen/button";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "../komponen/select";

export default function CreateUsers() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState({
    username: "",
    name: "",
    email: "",
    jenis_kelamin: "laki-laki",
    password: "",
    password_confirmation: "",
  });

  const handlechange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
        setIsLoading(true);
        const response = await axios.post('https://belajar-react.smkmadinatulquran.sch.id/api/users/create', users)
        setIsLoading(false)
        return navigate('/users')
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      alert('terjadi error')
    }
  };
  return (
    <div>
      <h1>Tambah Users</h1>
      <form onSubmit={handleSubmit} className="px-3 py-3">
        <Input
          value={users.username}
          label={"username"}
          placeholder="username"
          name={"username"}
          onChange={handlechange}
        />
        <Input
          value={users.name}
          label={"name"}
          placeholder="name"
          name={"name"}
          onChange={handlechange}
        />
        <Input
          value={users.email}
          label={"email"}
          type="email"
          placeholder="email"
          name={"email"}
          onChange={handlechange}
        />
        <Select
          value={users.jenis_kelamin}
          label={"jenis kelamin"}
          placeholder="jenis kelamin"
          name={"jenis_kelamin"}
          onChange={handlechange}
          >
         <option>Pilih</option>
          <option value={"laki-laki"}>laki-laki</option>
          <option value={"perempuan"}>perempuan</option>
        </Select>

        <Input
          value={users.password}
          label={"password"}
          placeholder="password"
          name={"password"}
          onChange={handlechange}
        />
        <Input
          value={users.password_confirmation}
          label={"konfirmasi password"}
          placeholder="konfirmasi password"
          name={"password_confirmation"}
          onChange={handlechange}
        />
        <Button title={isLoading?'sedang menyimpan':'menyimpan'} />
      </form>
    </div>
  );
}
