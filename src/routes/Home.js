import Header from "../components/Header"
import Typed from "../components/Typed"

export default function Home(){
    return (
        <div className = "flex items-center justify-center flex-col h-screen w-full">
            <Header name = ""></Header>

            <Typed text = {`, student, builder, researcher, and more. 
        
                
                            `}
                    classList = "text-4xl py-6 w-auto text-center m-auto"
                    delay = {500}
                ></Typed>


            <a className = "text-3xl italic underline" href = "/about">Learn more about me</a>

        </div>
    )
}