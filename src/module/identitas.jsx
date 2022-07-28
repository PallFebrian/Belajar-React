import React from "react";

export default function Identitas({ nama = "siswa", kelas = "x", nilai = "0" }) {
  return (
    <div className="identitas">
      <p>nama  : {nama}</p>
      <p>kelas : {kelas}</p>
      <p>nilai : {nilai}</p>
    </div>
  );
}

// export default function Identitas({ nama, kelas, nilai }) {
//     return (
//       <div className="identitas">
//         <p>nama  : {nama}</p>
//         <p>kelas : {kelas}</p>
//         <p>nilai : {nilai}</p>
//       </div>
//     );
//   }