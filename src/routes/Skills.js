import Header from "../components/Header"
import Skills from "../components/Skills"

export default function Home(){
    return (
        <div className = "flex items-center justify-center flex-col h-screen w-full">
            <Header name = "skills"></Header>

            <div className = "flex flex-row flex-wrap w-full my-8 items-center justify-center">

                <Skills name = "Languages" 
                skills = {["Python", "Javascript", "HTML/CSS", "Java", "C", "C++", "C#", "R"]}></Skills>

                <Skills name = "Web & App Development" 
                skills = {["React", "Vue", "Express", "Flask", "Django", "Next"]}></Skills>

                <Skills name = "Data and Analytics" 
                skills = {["SQL", "MongoDB", "Excel", "Tableau", "Pandas", "NumPy", "OpenCV", "GraphQL"]}></Skills>

                <Skills name = "AI & Machine Learning" 
                skills = {["SkLearn", "Tensorflow", "PyTorch", "HuggingFace", "LangChain", "Pinecone", "Faiss"]}></Skills>

                <Skills name = "Hardware & Embedded" 
                skills = {["Arduino", "Rasberry Pi", "STM32", "Assembly", "FreeRTOS", "Sensor Integration"]}></Skills>

                <Skills name = "Cloud & DevOps" 
                skills = {["AWS", "Docker", "GCP", "Terraform", "Git", "CICD"]}></Skills>

            </div>

        </div>
    )
}
