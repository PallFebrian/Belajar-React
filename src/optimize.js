import React, { memo, useCallback, useMemo } from 'react';

export default function Parent() {
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState('blue');
  console.log('parent render');

    const handleCount = () => {
      setCount((c) => c + 1);
    };

  const prossesBerat = (count) => {
    if(count < 200000000000){

    }
    console.log("proses jalan ")
    return count + 1;
  };

  const prossesBeratMemo = useMemo(()=>{
    return prossesBerat(count)
  },[count])
  const handleCountOP = useCallback(handleCount,[])

  console.log('use memo = ', prossesBeratMemo)
  console.log('use callback = ', handleCountOP)

  //   const handleCountOP = useCallback(handleCount, []); //cara1  //usecallback buat function

  // const handleCount = useCallback(() => {
  //   setCount((c) => c + 1);
  // }, []);

  return (
    <div class="flex justify-center width-[30%] mt-52">
      <div className="block p-6 rounded-lg shadow-lg bg-slate-500 max-w-sm ">
        <div>
          <h1>PARENT</h1>
          <p>count : {count}</p>
          <p>count2 : {prossesBeratMemo}</p>
          <button
            className=" inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleCount}
          >
            klik
          </button>
          <div className='mt-3'>
            <button
              className="mr-2 mt inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => {
                setUser('aqua');
              }}
            >
              aqua
            </button>
            <button
              className="mr-2 inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => {
                setUser('red');
              }}
            >
              red
            </button>
            <button
              className="mr-2 inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => {
                setUser('green');
              }}
            >
              green
            </button>
          </div>
          <div className=' leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg mt-3 w-25 h-10' style={{backgroundColor : user}}></div>
          {/* <Child user={user}/> */}
          <MemorizeChild user={user} handleCount={handleCount} />
        </div>
      </div>
    </div>
  );
}

function Child({ user, handleCount }) {
  console.log('child render');

  return (
    <div>
      <h2>Child</h2>
      <p>user : {user}</p>
      <button
        className=" inline-block px-6 py-2.5 bg-[#13b3ac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleCount}
      >
        Tambah count dari child
      </button>
    </div>
  );
}

const MemorizeChild = memo(Child);

function Delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  // do {
  //   currentDate = Date.now();
  // } while (currentDate - date < milliseconds);
}
