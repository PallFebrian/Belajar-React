
import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import User from "./pages/user";
import UserDetail from "./pages/userDetail";
import Error from "./pages/error";
import CreateUser from "./pages/createUser";
import UpdateUser from "./pages/updateUser";
import ProtectedRoute from "./routes/protectRoutes";
import Login from "./pages/auth/login";
import Artikel from "./pages/artikel";
import CreateArtikel from "./pages/artikel/createArtikel";
// import UpdateArtikel from "./pages/artikel/updateArtikel";
import DetailArtikel from "./pages/artikel/detailArtikel";
import EditArtikel from "./pages/artikel/editArtikel";

function App() {
  return (
    <React.Fragment>
      <h1 className="bg-red-500">API Training</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/artikel"
          element={
            <ProtectedRoute>
              <Artikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artikel/edit/:slug"
          element={
            <ProtectedRoute>
              <EditArtikel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:id/detail"
          element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/create"
          element={
            <ProtectedRoute>
              <CreateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <ProtectedRoute>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
         <Route
          path="/artikel/create"
          element={
            <ProtectedRoute>
              <CreateArtikel />
            </ProtectedRoute>
          }
        />
           <Route
          path="/artikel/:slug/detail"
          element={
            <ProtectedRoute>
              <DetailArtikel />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;


// // export nama bisa 1 komponen atau lebih
// import React  from "react";
// import {Routes, Navigate, Route} from 'react-router-dom'
// import User from './pages/user';
// import UserDetail from './pages/userDetail';
// import Error from './pages/error';
// import CreateUser from './pages/createUser'
// import UpdateUser from './pages/updateUser'

// function App() {
//   return(
//     <React.Fragment>
//       <h1 className="bg-red-500">API Training</h1>
//       <Routes>
//         <Route path="/user" element={<User/>}/>
//         <Route path="/user/:id/detail" element={<UserDetail/>}/>
//         <Route path="/user/create" element={<CreateUser/>}/>
//         <Route path="/user/update/:id" element={<UpdateUser/>}/>
//         <Route path="error" element={<Error/>} />
//         <Route path="*" element={<Navigate to="error" replace={true}/>}/>
//       </Routes>
//     </React.Fragment>
    
      
//   )
// }

// //JSX harus dibungkus dalam satu element parent

// export default App;