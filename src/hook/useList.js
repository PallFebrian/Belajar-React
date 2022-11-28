import axios from "axios";
import { useState , useEffect } from "react";

function useList(){

    const [alquran,setAlquran] = useState([])
    const getAlquran = async () => {
        try{
            const response = await axios.get(
                "https://api.alquran.cloud/v1/quran/en.asad"
            )

            console.log('res',response)
            setAlquran(response.data?.data?.surahs)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAlquran()
    },[])

    return { alquran }
}

export default useList