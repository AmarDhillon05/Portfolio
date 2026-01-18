import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, use } from "react";

export default function Header({name}){
    const headerList = ["", "about", "skills", "experience", "contact"]
    const headerNames = ["Hi, I'm Amar", "About me", "My Skills", "My Experience", "Contact Me"]
    const index = headerList.indexOf(name)
    
    function goBack(){
        let newIndex = index - 1
        if(newIndex == -1){newIndex = 4}
        return "/" + headerList[newIndex]
    }

    function goForward(){
        let newIndex = index + 1
        if(newIndex == 5){newIndex = 0}
        return "/" + headerList[newIndex]
    }

    const [backRoute, setBackRoute] = useState("javascript: void(0)")
    const [forwardRoute, setForwardRoute] = useState("javascript: void(0)")

    useEffect(() => {
        setBackRoute(goBack())
        setForwardRoute(goForward())
        document.getElementById("header").style.opacity = 1
        Array.from(document.getElementsByClassName("lowOpacity")).forEach(x => {
           x.style.opacity = 0.5
        })
    }, [])

    return (
        <div className = "flex flex-col items-center">

            <div className = "flex flex-row">
                {headerList.map((x) => {
                   return  <a href = {"/" + x} 
                    className =
            {`navIcon transition-all ease-in duration-400 scale-[2] hover:scale-[2.5] w-10 text-center hover:glow
            invert mx-4 my-8 ${name == x ? "" : "lowOpacity"}`}>
                        <img src = {x + "_icon.png"}></img>
                    </a>
                })}
            </div>

            <div className = "flex flex-row">
                <a className = "mx-4 text-4xl header transition-all ease-in duration-400 hover:scale-125 w-10 text-center hover:glow" 
                href = {backRoute}>{"<"}</a>
                <h1 id = "header" className = "opacity-0 transition-opacity ease-in duration-400 header text-4xl">
                    {headerNames[index]}
                </h1>
                <a className = "mx-4 text-4xl header transition-all ease-in duration-400 hover:scale-125 w-10 text-center hover:glow" 
                href = {forwardRoute}>{">"}</a>
            </div>

        </div>
    )
}
