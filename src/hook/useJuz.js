import axios from "axios";
import { useState , useEffect } from "react";

function useJuz(id = 1){  //nama depannya harus use ntar di panggilnya di app

    const [alquran,setAlquran] = useState([])
    const [juz,setJuz] = useState(id)
    const getAlquran = async () => {
        try{
            const response = await axios.get(
                `https://api.alquran.cloud/v1/juz/${juz}/en.asad`
            )

            console.log('res',response)
            setAlquran(response.data?.data?.surahs)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAlquran(juz)
    },[juz])

    return { juz , setJuz , alquran }
}

export default useJuz