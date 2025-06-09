import Header from "../components/Header"
import Typed from "../components/Typed"

export default function About(){
    return (
        <div className = "">
            <Header name = "about"></Header>

            <div className = "flex flex-row w-3/4 m-auto py-4 text-3xl">

                <p>Hi! I'm Amar, a current junior at the University of Maryland studying Computer Science with 
                    an ML focus and a Business Analytics minor. I'm heavily invested in all things tech, and am looking 
                    for ways to get involved professionally while learning and growing my interests
                </p>

            </div>

            <div className = "flex flex-row w-3/4 m-auto py-4 text-3xl align-center items-center">

                <p>Right now, I'm heavily invested multiple fields, like software development, ML-related research 
                        into both niche model development and applications, and the applications of world-ruling LLMs today. 
                        I'm always looking for opportunities to learn - right now, I've been studying modern AI pipelines, 
                        learning mroe about low-level systems design and optimization, breaking into hardware and embedded
                        systems, and discovering things about the industry that'll be essential to me in my career</p>

                

            </div>

            <div className = "flex flex-row w-3/4 m-auto py-4 text-3xl align-center items-center">


                <p> I'm also heavily invested in building things - both to work my skills and create applications of ideas
                        I find interesting. I've been working on projects integrating modern technologies into use cases like 
                        evaluating a product, saving time when shopping, or aiding healthcare, so I can build out cool stuff 
                        while learning more and helping other people. I'm always open to working on a new project - feel free 
                        if you have something cool in mind!</p>

            </div>

            <div className = "flex flex-row w-3/4 m-auto py-4 text-3xl">
            
                <p>I also have a lot of passions outside of tech! I've been playing drums, both on kit and marching snare, 
                    for a couple years, and am often listening to new music or looking for people to play with. I also love
                    lifting weights and other athletic activities with friends. I'm also trying to get into new things - right now, 
                    I'm learning graphic design and hope to be proficient in that some day.
                </p>
            </div>

        </div>
    )
}