import React, { useState } from "react";
import imageOff from "../assets/imageOff.png";
import imageOn from "../assets/imageOn.png";
function Light() {
    const [light, setlight] = useState(false)
    const lightOn = ()=>{
        setlight(true)
    }
    const lightOff=()=>{
        setlight(false)
    }
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <div>
                <img src={light === true? imageOn: imageOff } />
            </div>
          <div>
            <button onClick={lightOn} className= "text-4xl bg-white rounded-lg px-5 py-1 ml-2">On</button>
            <button onClick={lightOff} className="text-4xl bg-white rounded-lg px-5 py-1 ml-5">Off</button>
          </div>
        </div>
);
}
export default Light; 