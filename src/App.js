import React from "react";
import Produk from "./latihan1/latihan1";


// function App() {
//   return (
//     <React.Fragment>
//       <h1>Latihan Export Import</h1>
//     </React.Fragment>
//   );
// }

// // export nama bisa 1 komponen atau lebih

// export default App;

function App(){
  let [produk,setProduk] = React.useState([
    {
      jenis:"Elektronik",
      produlsi:"handphone",
      brand: [
        {
          nama:"samsung",
          harga:'Rp.1.000.000',
        },
        {
          nama:"xiaomi",
          harga:'Rp.500.000'
        },
      ],
    },
    {
      jenis:"Tranportasi",
      produlsi:"Mobil",
      brand: [
        {
          nama:"Toyota",
          harga:'Rp.1.000.000,000',
        },
        {
          nama:"xiaomi",
          harga:'Rp.500.000.00'
        }
      ]

    }
  ])

  return(
    <React.Fragment>
      <h1>latihan 01</h1>
      <produk data = {produk}/>
    </React.Fragment>
  )

}


export default Produk