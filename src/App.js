import React, { useEffect } from "react";

function App() {
  let [count, setCount] = React.useState(0);
  let [text, setText] = React.useState(true);
  let [message, setMessage] = React.useState(0);

  React.useEffect(() => {
    setMessage(message + 1);
    console.log("useEffect berjalan");
  }, [count, text]);
  console.log(text);

  let [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <React.Fragment>
      <h1>Belajar useEffect</h1>
      <h3>{message === 10 ? "ini sepuluh" : "ini bukan sepuluh"}</h3>
      <h1>message{message}</h1>
      <h1>Count{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tambah
      </button>
      <button
        onClick={() => {
          setText(!text);
        }}
      >
        Ubah
      </button>
    </React.Fragment>
  );
}

// export nama bisa 1 komponen atau lebih

export default App;
