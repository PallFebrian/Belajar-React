import React, {useReducer} from "react"


const reducer = (state,action) => {
    if(action.type ==="INCREMENT"){
        return{
            count:state.count +1,
            showText :state.showText,
        }
    }
    if(action.type ==="DECREMENT"){
        return{
            count:state.count -1,
            showText :state.showText,
        }
    }
    if(action.type ==="toggleShowText"){
        return{
            count:state.count,
            showText :!state.showText,
        }
    }
    return state
}

function ReducerMateri(){
    const [state,dispatch] = useReducer(reducer,{
        count : 0,
        showText : true,
    })
    return(
        <div>
            <h1>{state.count}</h1> 
            <button
            onClick={()=>{
                dispatch({
                    type:"INCREMENT"
                })
                dispatch({
                    type:"toggleShowText"
                })
            }} className="pr-5">
                TAMBAH
            </button>
            <button
            onClick={()=>{
                dispatch({
                    type:"DECREMENT"
                })
                dispatch({
                    type:"toggleShowText"
                })
            }}>
                KURANG
            </button>
            {state.showText && <p>Text ini muncul</p>}
         
        </div>

    )
}

export default ReducerMateri