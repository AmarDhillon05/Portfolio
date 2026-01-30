import Header from "../components/Header"
import Typed from "../components/Typed"

export default function About(){
    return (
        <div className = "">
            <Header name = "about"></Header>

            <div className = "flex flex-row w-3/4 m-auto py-4 text-3xl">

                <p>Hi! I'm Amar, a current junior at the University of Maryland studying Computer Science with a Statistics minor. 
                    I'm heavily invested in all things tech, and am looking 
                    for ways to get involved professionally while learning and growing my interests
                </p>

            </div>

            <div className = "flex flex-row w-3/4 m-auto py-4 text-3xl align-center items-center">

                <p>I've developed experience over the years in full-stack development with specializing in cloud and devops deployment 
                    and research-oriented AI. I've had most of my development experience through school clubs and internships at two 
                    developing startups, where at both I contributed to backend deployment of ML pipelines meant to ship fast for beta users
                    and evaluating ideation. I've also delved into research, having worked in two hardware labs on campus contributing to 
                    optimizing architectures and working on device-specific analysis features. Recently, I've continued building through 
                    hackathons, as a co-founder of TerpLabs @ Maryland, and through playing around with pet projects as a form of ideation for 
                    startup ideas. 
                </p>

                

            </div>

            <div className = "flex flex-row w-3/4 m-auto py-4 text-3xl align-center items-center">


                <p> I've learned from these experiences that I enjoy learning, building fast and ideating, but also prioritize practicality over 
                    integrating novel features for spectacle. In the future, I'm looking for opportunities where I can scale my development 
                    skills on problems with performance and scalability demands while serving massive audiences, while still having the 
                    freedom to learn as much as possible and immerse myself into new areas
                </p>

            </div>



        </div>
    )
}
