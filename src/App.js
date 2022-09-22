 import React from "react";
 import {Router,Route,Navigate, Routes} from "react-router-dom";
 import User from "./pages/user";
import DetailUser from "./pages/detailUser";
import CreateUsers from "./pages/createUsers";
import UpdateUser from "./pages/updateUser";



function App() {

  return (
    <React.Fragment>
      <h1 className="bg-gray-600 border-b-indigo-900 color-white">Latihan</h1>
      <Routes>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/:id/detail" element={<DetailUser/>}/>
        <Route path="/user/create" element={<CreateUsers/>}/>
        <Route path="/user/update/:id" element={<UpdateUser/>}/>
        <Route path="*" element={<Navigate to='/user' replace={true}/>}/>
      </Routes>
    </React.Fragment>
  );
}

// export nama bisa 1 komponen atau lebih

export default App;
