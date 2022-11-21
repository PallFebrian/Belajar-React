import { useLayoutEffect,useEffect } from "react";
import Parent from "./optimize";

export default function LayoutEffectTutotial(){

    useLayoutEffect(()=>{
        console.log("useLayutEffect")
    },[])
    
    useEffect(()=>{
        console.log("useEffect")
    },[])

    return <div>
        {console.log('jalan sini')}
        <Parent/>
    </div>
}