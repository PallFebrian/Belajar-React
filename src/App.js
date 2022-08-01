import React from "react";
import "./style/style.css";
import Identitas from "./module/identitas";
import Nilai from "./module/nilai";
import DataSiswa from "./module/dataSiswa";

function App() {
  let [data, setData] = React.useState([10, 20, 30, 40, 50]);
  const [dataSiswa, setDataSiswa] = React.useState([
    {
      nama: "muhammad",
      kelas: "XI RPL",
      nilai: "100",
    },
    {
      nama: "nopal",
      kelas: "XI RPL",
      nilai: "100",
    },
    {
      nama: "febrian",
      kelas: "XI RPL",
      nilai: "100",
    },
  ]);

  const [nilaiSiswa,setNilaiSiswa] = React.useState({
    nama: 'muhammad',
    kelas:'XI RPL',
    nilai:[90,80,100,100,90,80],
  })
  return (
    <React.Fragment>
      <h1>Latihan Props</h1>
      <section className="kotak1">
        <div>
          <Identitas nama={"nopal"} kelas={"XI rpl"} nilai={100} />
          <Identitas nama={"hilmi"} kelas={"XI rpl"} nilai={100} />
          <Identitas nama={"nabil"} kelas={"XI rpl"} nilai={100} />
          <Identitas nama={"japron"} kelas={"XI rpl"} nilai={100} />
          <Identitas />
        </div>

        <Nilai nama={"nopal"} data={data} />
        <DataSiswa data={dataSiswa}  nilai={nilaiSiswa}/>
      </section>
    </React.Fragment>
  );
}

// export nama bisa 1 komponen atau lebih

export default App;
