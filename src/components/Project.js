import { useState, useEffect } from "react";
import Typed from "./Typed";

export default function Project({name, tagline, description, github, site, classList = ""
}){

    const [view, showView] = useState(false)

    return (

        <div className = {`flex items-center justify-center flex-col border-white border-2 w-1/4 mx-2 my-2 max-h-1/2 min-h-1/2 py-2
            min-h-[150px] px-4 text-center
        ${classList}`}>
            <Typed
                text = {name}
                classList="text-4xl font-bold"
            ></Typed>

            <p className = "italic text-2xl">{tagline}</p>

            <a className = "italic text-xl text-white transition-all ease-in hover:text-gray-200 duration-500"
            onClick={() => {showView(!view)}}
            >
                {view ? "Hide Description" : "View Description"}
            </a>

            <div className = {`${view ? "max-h-[1000px]" : "max-h-0"} overflow-hidden transition-all duration-500`}>
                {description.map(listItem => {
                    return (
                        <p className = "text-2xl py-2">{listItem}</p>
                    )
                })}
            </div>
        
            
            <div className = "flex flex-row">
            {github && <a href = {github} className = "italic text-xl m-auto w-5/8 mx-2 hover:text-gray-200 transition-all duration-500">See Github</a>}
            {site && <a href = {site} className = "italic text-xl m-auto w-3/8 mx-2 hover:text-gray-200 transition-all duration-500">See Site</a>}
            </div>
        </div>

    )
}
