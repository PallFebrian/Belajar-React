import { useLayoutEffect,useEffect } from "react";

export default function LayoutEffectTutotial(){

    useLayoutEffect(()=>{
        console.log("useLayutEffect")
    },[])
    
    useEffect(()=>{
        console.log("useEffect")
    },[])

    return <div></div>
}