import React from "react";

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
            // className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={()=>{
                setCount((c) => c + 1)
            }}>
                klik
            </button>
            <Child user={user}/>
        </div>
    {/* <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
    <p class="text-gray-700 text-base mb-4">
      Some quick example text to build on the card title and make up the bulk of the card's
      content.
    </p>
    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
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

function Delay(milliseconds){
    const date = Date.now()
    let currentDate = null
    do{
        currentDate = Date.now()
    }while(currentDate - date < milliseconds)
}