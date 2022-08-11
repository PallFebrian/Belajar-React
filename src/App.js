import React from "react";
import Button from "./komponen/button";
import Layout from "./komponen/layout";
import Input from "./komponen/input";
import "./style/style.css";
import Card from "./komponen/card";

export default function App() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [data, setData] = React.useState([]);
  const [errors, setError] = React.useState({});

  const handleBlur = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log("ok siap jalan");
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
    if (e.target.value !== "") {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    } else {
      setError({
        ...errors,
        [e.target.name]: true,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");

    values.id = new Date().getTime()
    setData((data) => {
      return [...data, values];
    });

    // setValues((values) => {
    //   return {
    //     name: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   };
    // });
  };

  console.log("error", errors);
  return (
    <React.Fragment style={{}}>
      <div style={{ display: "flex", background: "#F1F3F6", height: "100vh" }}>
        <div style={{ width: "50%" }}>
          <form onSubmit={handleSubmit}>
            <Input
              isError={errors?.name}
              textError={"wajib diisi"}
              name="name"
              value={values.name}
              label={"Username"}
              placeholder={"Username"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Input
              isError={errors?.email}
              textError={"wajib diisi"}
              name="email"
              value={values.email}
              label={"Email"}
              placeholder={"Email"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Input
              isError={errors?.password}
              textError={"wajib diisi"}
              name="password"
              value={values.password}
              label={"Password"}
              placeholder={"Password"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Input
              isError={errors?.confirmPassword}
              textError={"wajib diisi"}
              name="confirmPassword"
              value={values.confirmPassword}
              label={"Konfirmasi Password"}
              placeholder={"Ulangi Password"}
              onBlur={handleBlur}
              onChange={handleChange}
            />{" "}
            <Button title={"Simpan"} />{" "}
          </form>{" "}
        </div>
        <Card data={data} setData={setData}/>
      </div>
    </React.Fragment>
  );
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