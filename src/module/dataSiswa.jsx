import React from "react";

export default function DataSiswa({ data, nilai }) {
  return (
    <React.Fragment>
      Ini Komponen Data Siswa
      {data?.map(function (item, index) {
        return (
          <React.Fragment>
            <div className="identitas">
              <p>nama : {item.nama}</p>
              <p>kelas : {item.kelas}</p>
              <p>nilai : {item.nilai}</p>
            </div>
          </React.Fragment>
        );
      })}
      <div>
              <p>nama : {nilai.nama}</p>
              <p>kelas : {nilai.kelas}</p>
              <div>
                Nilai Adalah
                {nilai.nilai.map((item)=>{
                    return <p>{item}</p>
                })}
              </div>
            </div>
    </React.Fragment>
  );
}
