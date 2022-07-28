import React from "react";
import "./style/style.css";
import Identitas from "./module/identitas";
import Nilai from "./module/nilai";

function App() {
  let [data, setData] = React.useState([10,20,30,40,50])
  return (
    <React.Fragment>
      <h1>Latihan Props</h1>
      <section className="section"> 
        <div>
        <Identitas nama={"nopal"} kelas={"XI rpl"} nilai={100}/>
        <Identitas nama={"hilmi"} kelas={"XI rpl"} nilai={100}/>
        <Identitas nama={"nabil"} kelas={"XI rpl"} nilai={100}/>
        <Identitas nama={"japron"} kelas={"XI rpl"} nilai={100}/>
        <Identitas/>
        </div>
        
        <Nilai nama={"nopal"} data={data} />
      </section>
    </React.Fragment>
  );
}

// export nama bisa 1 komponen atau lebih

export default App;
