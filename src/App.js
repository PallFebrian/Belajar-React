import React from "react";

function App() {
  let classButton = "text-white hover:text-gray-400";
  let [popUp,setPopUp] = React.useState(false)

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-emerald-300">
        <div className="h-[8%] w-full bg-slate-500 lg:hidden flex items-center justify-between px-5">
          <span 
          onClick={()=>{
            setPopUp(!popUp)
          }}
          
          className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"></span>
          <span className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"></span>
          <span className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"></span>
        </div>

        <div className="h-[8%] w-full bg-slate-500 hidden lg:grid grid-cols-5 items-center px-5">
          <div className="flex w-full items-center">
            <section className="h-8 w-8 bg-slate-100 rounded-full"></section>
            <input
              className="h-5 ml-3 w-[80%] border rounded-md px-2 py-3"
              placeholder="Searh or Jump to"
            />
          </div>

          <div className="col-span-3 h-full flex items-center space-x-5">
            <button className={classButton}>Pull Request</button>
            <button className={classButton}>Issue</button>
            <button className={classButton}>Market Place</button>
            <button className={classButton}>Explore</button>
          </div>

          <div className="h-full w-full flex items-center justify-end space-x-3">
            <span className="h-8 w-8 bg-slate-100 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-100 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-100 rounded-full"></span>
          </div>
        </div>
        <div className="h-[92%] w-full bg-slate-400 sm:block lg:flex items-center relative">
        {popUp && (
            <section className="bg-slate-500 h-[80%] w-full top-0  absolute z-10 lg:hidden block"></section>
        )}

          <div className="h-full sm:w-full lg:w-[20%] bg-slate-300"></div>
          <div className="h-full sm:w-full lg:w-[80%] bg-slate-200"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
