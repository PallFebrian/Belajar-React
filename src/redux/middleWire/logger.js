export const logger = (state) => {
    console.log("state",state)
    return (next) => {
        return(action)=>{
            console.log('memanggil', action)
            if(action === 'change'){
                return next(action)
            }else {
                return
            }
        };
    };
};

export const tes = (state) => {
    console.log("state",state)
    return (next) => {
        return(action)=>{
            console.log('memanggil', action)
            if(action.color !== "purple"){
                action.color = "purple"
                return next(action)
            }

            return next(action)
        };
    };
};

export function logger2() {
    return function (state) {
        return function (next){
             return function (action){
                console.log('memanggil', action.type)
                return next(action)
             }
        }
    }
}

export const logger3 = (state)=>(next)=>(action)=>{
    console.log('memanggil', action.type)
    return next(action)
}