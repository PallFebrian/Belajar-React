import React, { useReducer, useRef, } from "react";
import Parent from "./optimize";
import ReducerMateri from "./useReducer";

function RefTutorial() {

  const useRef = useRef(null)
  const useReducer = useRef(null)
  const optimize = useRef(null)
  const topRef = useRef(null)

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior:'smooth',
    })
  }

  const ScrollToTop = (ref) => {
    window.scrollTo({
      // top: ref.current.offsetTop,
      top: 0,
      behavior:'smooth',
    })
  }

  // const inputref = React.useRef(null);
  // const onClick = () => {
  //   console.log('ref.input=>',inputref.current);
  //   inputref.current.focus();
  //   inputref.current.value = "nopall";
  //   // inputref.current.type = 'password';
  //   // inputref.current.placeholder = 'ubah placeholder'
  // };
  return (
    <React.Fragment>
      <div ref={topRef}>
        <div className="space-x-5">
          <button onClick={()=>{
           scrollToSection (useRef)
          }}>
            useRef
          </button>
          <button onClick={()=>{
           scrollToSection (useReducer)
          }}>
            useReducer
          </button>
          <button onClick={()=>{
           scrollToSection (optimize)
          }}>
            optimize
          </button>
        </div>
            <div ref={useRef} className="h-screen w-fullbg-slate-600 pt-10">
              <h2 className="text-slate-300 font-bold">useRef</h2>
              {/* <useRef/> */}
            </div>
            <div ref={useReducer} className="h-screen w-full bg-slate-600pt-10">
              <h2 className="text-slate-300 font-bold">useReducer</h2>
              <ReducerMateri/>
            </div>
            <div ref={optimize} className="h-screen w-full bg-slate-600pt-10">
              <h2 className="text-slatae-300 font-bold">optimize</h2>
              <Parent/>
            </div>
            <button onClick={()=>{
              ScrollToTop(topRef)
            }} className='fixed bg-green-500 cursor-pointer z-10 bottom-2 right-5'>
              back to top
            </button>
      </div>

       {/* <h1 className="bg-red-500">Latihan Export Import</h1>
      <div class="flex justify-center mt-[5%]">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <div className="">
            <h1>Belajar hook</h1>
            <input ref={inputref} type={"text"} placeholder="tulis nama" />
            <button
              onClick={onClick}
              type="button"
              class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-3"
            >
              Change Name
            </button>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}
export default RefTutorial;
