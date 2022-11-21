import React,{memo} from "react";

export default function Parent(){
    const [count,setCount] = React.useState(0)
    const [user,setUser] = React.useState("nopep")
    console.log("parent render")
    return(
        <div class="flex justify-center width-[30%]">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
  <div>
            <h1>PARENT</h1>
            <p>count : {count}</p>
            <button 
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={()=>{
                setCount((c) => c + 1)
            }}>
                klik
            </button>
            {/* <Child user={user}/> */}
            <MemorizeChild/>
        </div>
  </div>
</div>
        
    )
}

function Child({user}){
    console.log('child render')

    return(
        <div>
            <h2>Child</h2>
            <p>user : {user}</p>
        </div>
    )
}

const MemorizeChild =  memo(Child)

function Delay(milliseconds){
    const date = Date.now()
    let currentDate = null
    do{
        currentDate = Date.now()
    }while(currentDate - date < milliseconds)
}