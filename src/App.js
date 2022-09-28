// export nama bisa 1 komponen atau lebih
import React  from "react";
import {Routes, Navigate, Route} from 'react-router-dom'
import User from './pages/user';
import UserDetail from './pages/userDetail';
import Error from './pages/error';
import CreateUser from './pages/createUser'
import UpdateUser from './pages/updateUser'

function App() {
  return(
    <React.Fragment>
      <h1 className="bg-red-500">API Training</h1>
      <Routes>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/:id/detail" element={<UserDetail/>}/>
        <Route path="/user/create" element={<CreateUser/>}/>
        <Route path="/user/update/:id" element={<UpdateUser/>}/>
        <Route path="error" element={<Error/>} />
        <Route path="*" element={<Navigate to="error" replace={true}/>}/>
      </Routes>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;