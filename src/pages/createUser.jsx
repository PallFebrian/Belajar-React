import React from "react";
import Input from "../module/input";
import Button from "../module/button";
import axios from "axios";
import {useNavigate, Link} from 'react-router-dom'
import Select from './select'
import Swal from "sweetalert2";

export default function CreateUser() {
    let navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "laki-laki",
    password: "",
    password_confirmation: "",
  });
  const handleChange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async() => {
    console.log(users);
    try {
        setIsLoading(true)
        const response = await axios.post('https://belajar-react.smkmadinatulquran.sch.id/api/users/create', users)
        setIsLoading(false)
        return navigate('/user')
    } catch (err) {
        console.log(err);
        setIsLoading(false)
        alert('Error!!')
    }
  }
  const succesHandle = (id) => {
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})
  };

  return (
    <div>
      <h1>Tambah User</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          value={users.username} 
          label={"username"} 
          placeholder="username" 
          name={"username"} 
          onChange={handleChange} 
        />
        <Input 
          value={users.name} 
          label={"name"} 
          placeholder="name" 
          name={"name"} 
          onChange={handleChange} 
        />
        <Input 
          value={users.email} 
          label={"email"} 
          type="email" 
          placeholder="email" 
          name={"email"} 
          onChange={handleChange} 
        />
        <Select
          value={users.jenis_kelamin}
          label={'jenis_kelamin'}
          placeholder="jenis_kelamin"
          name={'jenis_kelamin'}
          onChange={handleChange}
        >
          <option>Pilih</option>
          <option value={'laki-laki'}>laki-laki</option>
          <option value={'perempuan'}>perempuan</option>
        </Select>
        <Input 
          value={users.password} 
          label={"password"} 
          placeholder="password" 
          name={'password'} 
          onChange={handleChange}
        />
        <Input 
          value={users.password_confirmation} 
          label={"confirm password"} 
          placeholder="confirm password" 
          name={'password_confirmation'} 
          onChange={handleChange}
        />
        <Button title={isLoading ? 'Saving Data' : 'Save'}  onClick={() => {
                      succesHandle(2);
                    }} />
        <Link to={'/user'} className='pl-5'>
          <Button title={'Back to user'}/>
        </Link>
        
      </form>
    </div>
  );
}