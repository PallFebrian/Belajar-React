import React from "react";

function Produk({ data }) {
  return (
    <React.Fragment>
      <h1>Data Produk</h1>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <h1>Data ke{index + 1}</h1>
            <h3>jenis : {item.jenis}</h3>
            <h3>Produk : {item.Produk}</h3>
            <div>
              <h2>Tipe</h2>
              <div>
                {item?.brand?.map((value, index2) => {
                  return (
                    <div key={index2}>
                      <p>{value.nama}</p>
                      <p>{value.harga}</p>
                      <p></p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
//     return(
//         <React.Fragment>
//             {data?.Map((item ,index)=> {
//                 return(
//                     <React.Fragment>
//             <div className="produk">
//                 <div className="produk1">
//                     <h4>jenis : {data.jenis}</h4>
//                     <h4>produk : {data.data}</h4>
//                     <h3>Produk 1</h3>
//                     <ul>
//                         <li>nama : {data.brand[0].nama}</li>
//                         <li>harga : {data.brand[0].harga}</li>
//                     </ul>
//                     <h3>Tipe 2</h3>
//                     <ul>
//                         <li>nama : {data.brand[1].nama}</li>
//                         <li>harga : {data.brand[1].harga}</li>
//                     </ul>
//                 </div>
//             </div>
//             </React.Fragment>
//                 )
// })}
//         </React.Fragment>
//     )
// }

export default Produk;
