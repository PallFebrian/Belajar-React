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
  const [errorMessage,setErrorMessage] = React.useState('')
  const [error,setError] = React.useState({})
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
        setErrorMessage('error')
        setError(err?.response?.data?.error)
  
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
    <div className="table-auto w-full ">
      <h1>Tambah User</h1>
      <p className="text-red-600 italic">{errorMessage}</p>
      <form onSubmit={handleSubmit}>
        <Input 
          value={users.username} 
          label={"username"} 
          placeholder="username" 
          name={"username"} 
          onChange={handleChange} 
        />
        <p className="text-red-600 italic">{error?.username?.[0]}</p>
        <Input 
          value={users.name} 
          label={"name"} 
          placeholder="name" 
          name={"name"} 
          onChange={handleChange} 
        />
        <p className="text-red-600 italic">{error?.name?.[1]}</p>
        <Input 
          value={users.email} 
          label={"email"} 
          type="email" 
          placeholder="email" 
          name={"email"} 
          onChange={handleChange} 
        />
        <p className="text-red-600 italic">{error?.email?.[2]}</p>
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
        <p className="text-red-600 italic">{error?.jenis_kelamin?.[3]}</p>
        <Input 
          value={users.password} 
          label={"password"} 
          placeholder="password" 
          name={'password'} 
          onChange={handleChange}
        />
        <p className="text-red-600 italic">{error?.password?.[4]}</p>
        <Input 
          value={users.password_confirmation} 
          label={"confirm password"} 
          placeholder="confirm password" 
          name={'password_confirmation'} 
          onChange={handleChange}
        />
        <p className="text-red-600 italic">{error?.password_confirmation?.[5]}</p>
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