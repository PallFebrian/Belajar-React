import React from "react";

export default function Select({label,isError,teaxtError,children,...props}){
    return(
        <div className="input">
            <label className="label" htmlFor={label}>
                {label}
            </label>
            <select {...props} className="input text-border" id={label}> 
                {children}
            </select>
            {isError && <p className="error">{teaxtError}</p>}
        </div>
    )
}