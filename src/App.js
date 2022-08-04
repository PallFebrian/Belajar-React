import React from "react";
import Button from "./komponen/button";
import Layout from "./komponen/layout";
import "./style/style.css";

export default function App(){
  
  let [name, setName] = React.useState()
  let [email, setEmail] = React.useState()
  let [password, setPassword] = React.useState()
  let [confirmPassword, setConfirmPassword] = React.useState()
  return(
    <React.Fragment>
      <form>TES</form>
    </React.Fragment>
  )
}


// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1);
//   };
//   const handleKurang = () => {
//     setCount(count - 1);
//   };
//   return (
//     <React.Fragment>
//       <h1>Count = {count}</h1>
//       <Button onClick={handleTambah} title="tambah" color="blue" />
//       <Button
//         disabled={count === 0 ? true : false}
//         onClick={handleKurang}
//         title="kurang"
//         color="green"
//       />
//       <Button
//         disabled={count === 0 ? true : false}
//         onClick={() => {
//           setCount(0);
//         }}
//         title="reset"
//       />
//     </React.Fragment>
//   );
// }

// // export nama bisa 1 komponen atau lebih

// export default App;
