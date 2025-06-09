import Header from "../components/Header"
import Typed from "../components/Typed"

export default function Home(){
    return (
        <div className = "flex items-center justify-center flex-col h-screen w-full">
            <Header name = "contact"></Header>


            <div className = "items-center justify-center flex flex-row">
                <p className = "text-4xl py-6 w-auto text-center m-auto px-4">Email: </p>
                <a href = "mailto:adhillon0535821@gmail.com">
                    <Typed text = {`adhillon0535821@gmail.com`}
                        classList = "text-4xl py-6 w-auto text-center m-auto hover:text-gray-200 transition-all duration-500"
                        delay = {500}
                    ></Typed>
                </a>
            </div>


            <div className = "items-center justify-center flex flex-row">
                <p className = "text-4xl py-6 w-auto text-center m-auto px-4">Phone (Mobile): </p>
                <a href = "tel:+18482313165">
                    <Typed text = {`(+1) 848-231-3165`}
                        classList = "text-4xl py-6 w-auto text-center m-auto hover:text-gray-200 transition-all duration-500"
                        delay = {500}
                    ></Typed>
                </a>
            </div>


            <div className = "items-center justify-center flex flex-row">
                <p className = "text-4xl py-6 w-auto text-center m-auto px-4">LinkedIn: </p>
                <a href = "https://www.linkedin.com/in/amar-dhillon-917537261/">
                    <Typed text = {`https://www.linkedin.com/in/amar-dhillon-917537261/`}
                        classList = "text-4xl py-6 w-auto text-center m-auto hover:text-gray-200 transition-all duration-500"
                        delay = {500}
                    ></Typed>
                </a>
            </div>


            <div className = "items-center justify-center flex flex-row">
                <p className = "text-4xl py-6 w-auto text-center m-auto px-4">Github: </p>
                <a href = "https://github.com/AmarDhillon05">
                    <Typed text = {`https://github.com/AmarDhillon05`}
                        classList = "text-4xl py-6 w-auto text-center m-auto hover:text-gray-200 transition-all duration-500"
                        delay = {500}
                    ></Typed>
                </a>
            </div>


            <div className = "items-center justify-center flex flex-row">
                <p className = "text-4xl py-6 w-auto text-center m-auto px-4">Kaggle: </p>
                <a href = "https://www.kaggle.com/amardhillon05">
                    <Typed text = {`https://www.kaggle.com/amardhillon05`}
                        classList = "text-4xl py-6 w-auto text-center m-auto hover:text-gray-200 transition-all duration-500"
                        delay = {500}
                    ></Typed>
                </a>
            </div>

        </div>
    )
}