import Input from "../komponen/input";
import Button from "../komponen/button";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Select from "../komponen/select";

export default function UpdateUser() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState({
    username: "",
    name: "",
    email: "",
    jenis_kelamin: "",
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
      const response = await axios.put(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${id}`,
        users
      );
      setIsLoading(false);
      return navigate("/users");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      alert("terjadi error");
    }
  };

  const getDetailUser = async () => {
    try {
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/detail/${id}`
      );

      console.log("response =>", response.data);

      const dataUser = response.data.data;
      console.log(dataUser);
      setUsers(() => {
        return {
          username: dataUser.username,
          name: dataUser.name,
          email: dataUser.email,
          jenis_kelamin: dataUser.jenis_kelamin,
        };
      });
    } catch (err) {}
  };

  React.useEffect(() => {
    getDetailUser(id);
  }, []);
  return (
    <div>
      <h1>Update User {id}</h1>
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

        <Button title={isLoading ? "Updating" : "Update"} />
      </form>
    </div>
  );
}
