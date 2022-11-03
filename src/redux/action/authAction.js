import Cookies from "js-cookie";
import {loginProses} from "../../api/auth";


export function authLogin(payload){
    return async (dispatch) => {
        try{
            let response = await loginProses(payload);
            let data = response.data;
            console.log('response',response)
            dispatch({
                type : "login",
                name : data?.user?.name,
                email : data?.user?.email,
                isAuth : true
            });

            Cookies.set("myapps_token",data?.token)
            return data
        }catch(err){
            console.log(err);
            return err;
        }
    }
}