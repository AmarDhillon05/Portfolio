import Header from "../components/Header"
import Skills from "../components/Skills"

export default function Home(){
    return (
        <div className = "flex items-center justify-center flex-col h-screen w-full">
            <Header name = "skills"></Header>

            <div className = "flex flex-row flex-wrap w-full my-8 items-center justify-center">

                <Skills name = "Languages" 
                skills = {["Python", "Javascript", "HTML/CSS", "Java", "C", "C++", "C#", "R"]}></Skills>

                <Skills name = "Web" 
                skills = {["React", "Vue", "Express", "Flask", "Django", "Next"]}></Skills>

                <Skills name = "Data" 
                skills = {["SQL", "MongoDB", "Excel", "Tableau", "Pandas", "NumPy", "OpenCV", "GraphQL"]}></Skills>

                <Skills name = "AI/ML" 
                skills = {["SkLearn", "Tensorflow", "PyTorch", "HuggingFace", "LLMs", "Pinecone", "Faiss"]}></Skills>

                <Skills name = "Hardware" 
                skills = {["Arduino", "Rasberry Pi", "STM32", "Assembly", "PID", "Sensor Integration"]}></Skills>

                <Skills name = "Other" 
                skills = {["Git/Github", "Web Scraping", "Linux", "AWS", "Docker"]}></Skills>

            </div>

        </div>
    )
}