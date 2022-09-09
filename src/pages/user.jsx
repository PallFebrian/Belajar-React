import React from "react";
import axios from "axios";
export default function Surah() {
  const [surah, setSurah] = React.useState([]); // state  untuk menyimpan data user dari API
  const [page, setPage] = React.useState(1);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        `https://equran.id/api/surat`
      );
      console.log("response =>", response);
      setSurah(response.data);
      setPage(response.data);
    } catch (err) {}
  };

  console.log("surah =>", surah);
  console.log("page  =>", page);

  React.useEffect(() => {
    getUserHandle();
  }, [page]);

  return (
    <div className="bg-midnight text-tahiti">
      <h1>Tabel User</h1>
      <table className="table-auto">
        <thead>
          <tr className="text-left border">
            <th className="">No</th>
            <th>Nama</th>
            <th>Nama Latin</th>
            <th>Jumlah Ayat</th>
            <th>Tempat Turun</th>
            <th>Arti</th>
          </tr>
        </thead>
        <tbody>
          {surah.map((surah, index) => {
            return (
              <tr key={index} className="text-left border">
                <td>{index + 1}</td>
                <td>{surah.nama}</td>
                <td>{surah.nama_latin}</td>
                <td>{surah.jumlah_ayat}</td>
                <td>{surah.tempat_turun}</td>
                <td>{surah.arti}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
