import React from "react";

function App() {
  let classButton = "text-white hover:text-gray-400 cursor-pointer";
  let [popUp, setPopUp] = React.useState(false);

  return (
    <React.Fragment>
      <div className="w-screen h-screen bg-emerald-300">
        <div className="h-[8%] w-full bg-slate-800 lg:hidden flex items-center justify-between px-5 relative z-50">
          <span
            onClick={() => {
              setPopUp(!popUp);
            }}
            className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"
          ></span>
          <span className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"></span>
          <span className="h-8 w-8 bg-slate-100 rounded-full hover:bg-gray-400"></span>
        </div>

        <div className="h-[8%] w-full bg-slate-800 hidden lg:grid grid-cols-5 items-center px-5">
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

          <div className="h-full w-full flex items-center justify-end space-x-3 ">
            <span className="h-8 w-8 bg-slate-400 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-400 rounded-full"></span>
            <span className="h-8 w-8 bg-slate-400 rounded-full"></span>
          </div>
        </div>
        <div className="h-[92%] w-full bg-slate-700 sm:block lg:flex items-center relative">
          {/* {popUp && (
            <section className="bg-slate-500 h-[80%] w-full top-0  absolute z-10 lg:hidden block"></section>
        )} */}

          <section
            className={`${
              popUp
                ? "transform translate-y-0 transition duration-500"
                : "transform -translate-y-full transition duration-500"
            } bg-slate-500 h-[80%] w-full top-0  absolute z-10 lg:hidden block flex items-center`}
          >
            <h1 className="font-light text-white -rotate-90 whitespace-nowrap tracking-wide">
              CILUPP HAHAY
            </h1>
          </section>

          {/* //////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="h-full sm:w-full lg:w-[20%] bg-slate-600 p-4">
            <section className="flex items-center space-x-2 border-b-2 border-slate-300 pb-3">
              <div className="h-8 w-8 rounded-full bg-slate-300"></div>
              <button className="text-slate-200 hover:text-gray-400">
                pallfebrian
              </button>
            </section>
            <section className="space-y-2 border-b-2 border-slate-300 pb-3">
              <div className="flex items-center justify-between mt-10">
                <h3 className="text-slate-200">Recent Repositeries</h3>
                <button className="border px-2 bg-green-600 border-green-600 rounded md cursor-pointer text-slate-200">
                  New
                </button>
              </div>
              <div>
                <input
                  className="border rounded-md px-2 w-full h-8"
                  placeholder="Find a Repository..."
                />
              </div>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => {
                  return (
                    <div
                      className=" text-slate-200 font-thin flex items-center space-x-2"
                      key={item}
                    >
                      <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                      <p> pallfebrian/malsmca</p>
                    </div>
                  );
                })}
                <p className="text-slate-300 mt-2 mb-2 ">Show more..</p>
              </div>
            </section>
            <section>
              <div className="mt-4">
                <h3 className="text-slate-200">Recent activity</h3>
                <p className="text-slate-200 font-thin text-sm mt-2">
                  When you take actions across GitHub, we’ll provide links to
                  that activity here.
                </p>
              </div>
            </section>
          </div>

          {/* //////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="h-full sm:w-full lg:w-[80%] bg-slate-500 flex overflow-auto">
            <section className="mt-10 ml-10 w-[60%] ">
              <div>
                <section className="text-slate-200 text-[32px] font-medium ">
                  The home for all developers — including you.
                </section>
                <p className="text-slate-200 font-thin text-md mt-2">
                  Welcome to your personal dashboard, where you can find an
                  introduction to how GitHub works, tools to help you build
                  software, and help merging your first lines of code.
                </p>
              </div>
              <div className="flex items-center mt-10">
                <section className="h-8 w-8 rounded-full bg-slate-400"></section>
                <p className="text-slate-200 ml-2">Start writing code</p>
              </div>

              {/* ////////////////////////////////////////////////////////////////////// */}

              <section className="flex items-center space-x-5 mt-3">
                <section className="w-[50%] h-[300px] border border-2">
                  <h3 className="text-slate-200 text-dm ml-2">
                    Start a new repository
                  </h3>
                  <p className="text-slate-200 font-thin text-md mt-1 ml-2">
                    A repository contains all of your project's files, revision
                    history, and collaborator discussion.
                  </p>
                  <div className="flex items-center mt-3">
                    <p className="ml-2 text-slate-200">pallfebrian /</p>
                    <input
                      className="ml-1 border rounded-md px-2 w-[225px] "
                      placeholder="name your new repository.."
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="h-4 w-4 rounded-full border border-2 bg-blue-600 border-slate-200 ml-2"></div>
                    <div className="h-6 w-6 rounded-25 border border-2 border-slate-200 ml-2 mr-2"></div>

                    <div className="">
                      <h3 className="text-slate-200 font-medium">Public</h3>
                      <p className="text-slate-200 font-thin text-[14px]">
                        Anyone on the internet can see this repository
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="h-4 w-4 rounded-full border border-2 border-slate-200 ml-2"></div>
                    <div className="h-6 w-6 rounded-25 border border-2 border-slate-200 ml-2 mr-2"></div>

                    <div className="">
                      <h3 className="text-slate-200 font-medium">Private</h3>
                      <p className="text-slate-200 font-thin text-[14px]">
                        You choose who can see and commit to this repository
                      </p>
                    </div>
                  </div>
                </section>
                <section className="w-[50%] h-[300px] border border-2">
                  <section className="">
                    <h3 className="text-slate-200 text-dm ml-2">
                      Introduce yourself with a profile README
                    </h3>
                    <p className="text-slate-200 font-thin text-md mt-1 ml-2">
                      Share information about yourself by creating a profile
                      README, which appears at the top of your profile page.
                    </p>
                  </section>
                </section>
              </section>
              {/* ////////////////////////////////////////////// */}

              <section className="flex items-center mt-8">
                <section className="h-8 w-8 rounded-full bg-slate-400"></section>
                <p className="text-slate-200 ml-2 ">Use tools of the trade</p>
              </section>
              <section className="flex items-center space-x-5">
                <section className="w-[50%] h-[150px] border border-2"></section>
                <section className="w-[50%] h-[150px] border border-2"></section>
              </section>
              {/* /////////////////////////////////////////////////// */}
              <section className="flex items-center mt-8">
                <section className="h-8 w-8 rounded-full bg-slate-400"></section>
                <p className="text-slate-200 ml-2 ">Get started on GitHub</p>
              </section>
              <section className="flex items-center space-x-5">
                <section className="w-[50%] h-[200px] border border-2"></section>
                <section className="w-[50%] h-[200px] border border-2"></section>
              </section>
            </section>

            {/* //////////////////////////////////////////////////////// */}

            <div className=" h-full w-[40%] mt-10 ml-10 ">
              <section className="w-[89%] h-[34%] border border-2 "></section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
