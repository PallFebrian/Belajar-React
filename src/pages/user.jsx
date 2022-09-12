import React from "react";
import axios from "axios";
import Card from "./card";
export default function Surah() {
  const [surah, setSurah] = React.useState([]); // state  untuk menyimpan data user dari API
  const [page, setPage] = React.useState(1);

  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://equran.id/api/surat`);
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
    <section className="bg-gray-800 w-screen h-full px-10 py-10 pb-10">
        <div className="flex justify-center">
          <section className="grid grid-cols-1 gap-4">
          {surah.map((surah, index) => {
          return (
            <div>
              <Card
                nomor={index + 1}
                nama={surah.nama}
                namaLatin={surah.nama_latin}
                jumlahAyat={surah.jumlah_ayat}
                tempatTurun={surah.tempat_turun}
                arti={surah.arti}
              />
            </div>
          );
        })}
          </section>
        </div>
      </section>
  );
}
