import React, { useState } from "react";

const Project = () => {
const [text,setText] = useState("")

    function changeText(e){
        setText("Hello " + e.target.value +"!")
    }

    return(
           <div>
             <p>Enter your name:</p>
            <input onChange={changeText}></input>
            <p>{text}</p>
           </div>
    )
}

export default Project