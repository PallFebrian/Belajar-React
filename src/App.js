import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useJuz from './hook/useJuz';
import useList from './hook/useList';
// import LayoutEffectTutotial from './useLayout';
// import ReducerMateri from './useReducer';
// import RefTutorial from './useRef';
export default function App() {
  // const [page, setPage] = useState(10);
  // const [pageSize, setPageSize] = useState(1);

  // const handlePageSize = (e) => {
  //   setPageSize(e.target.value);
  // };

  // const handlePage = (e) => {
  //   setPage(e.target.value);
  // };

  const { alquran } = useList();
  const { alquran: data, juz, setJuz } = useJuz(1);
  console.log('alquran', alquran);
  console.log('juz', data);

  return (
    <React.Fragment>
      <div className="w-full h-screen bg-slate-600 text-slate-300">
        <h1 className="bg-[#13b3ac] text-slate-700">HOOK</h1>
        <div className="flex justify-center width-[100%] mt-52">
          <div className="block p-6 rounded-lg shadow-lg bg-slate-500 max-w-sm ">
            <h1>Belajar custom hook</h1>
            <h2>{juz}</h2>
            <button
              className="inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-36 "
              onClick={() => setJuz((juz) => juz + 1)}
            >
              Ubah Juz
            </button>
            {/* page Size : {pageSize}
            page : {page}
            <div>
              <select onChange={handlePageSize} value={pageSize}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <div className="space-x-3">
                <button
                  className="inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handlePage}
                  value={1}
                >
                  1
                </button>
                <button
                  className=" inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handlePage}
                  value={2}
                >
                  2
                </button>
                <button
                  className=" inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handlePage}
                  value={3}
                >
                  3
                </button>
                <button
                  className=" inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handlePage}
                  value={4}
                >
                  4
                </button>
                <button
                  className=" inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={handlePage}
                  value={5}
                >
                  5
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
