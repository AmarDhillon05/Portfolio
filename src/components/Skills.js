import { useState, useEffect } from "react";
import Typed from "./Typed";

export default function Project({name, skills}){

    const [view, showView] = useState(false)

    return (

        <div className = "flex items-center justify-center flex-col border-white border-2 w-1/4 mx-2 py-2">
            <Typed
                text = {name}
                classList="text-4xl font-bold"
            ></Typed>

            <div className = "flex items-center justify-center flex-row flex-wrap w-full">
                {skills.map(skill => {
                    return <div>
                        <a className = "text-2xl hover:text-gray-500 transition-all duration-500 mx-4">{skill}</a>
                    </div>
                })}
            </div>

        
        </div>

    )
}