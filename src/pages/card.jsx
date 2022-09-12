import React from "react";

export default function Card(
  nomor,
  nama,
  namaLatin,
  jumlahAyat,
  tempatTurun,
  arti
) {
  return (
    <React.Fragment>
      <div className="bg-gray-800p-4 w-[380px] rounded-2xl text-white grid content-between border-gray-500 border-b-2">
        <div className="rounded-full border-violet-600 flex flex-row justify-between">
            <p>{nomor}. {namaLatin}</p>
            <p>{arti}</p>
        </div>
        <div className="h-[2px] bg-gray-500"></div>
        <div className="flex flex-row justify-between text-gray-500 capitalize">
            <p>{tempatTurun}</p>
            <p>{jumlahAyat}Ayat</p>
        </div>
        <div className="flex-col flex w-full">
          <p  className="text-[65px] text-violet-600 self-end">{nama}</p>
        </div>

      </div>
    </React.Fragment>
  );
}
