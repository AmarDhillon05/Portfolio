import Header from "../components/Header"
import Skills from "../components/Skills"

export default function Home(){
    return (
        <div className = "flex items-center justify-center flex-col h-screen w-full">
            <Header name = "skills"></Header>

            <div className = "flex flex-row flex-wrap w-full my-8 items-center justify-center">

                <Skills name = "Languages" 
                skills = {["Python", "JavaScript/TypeScript", "HTML/CSS", "Java", "C", "C++", "C#", "R"]}></Skills>

                <Skills name = "Web & App Development" 
                skills = {["React.js/Next.js", "Spring Boot", "Vue", "Express", "Flask", "Django"]}></Skills>

                <Skills name = "Data and Analytics" 
                skills = {["SQL", "MongoDB", "Pandas", "NumPy", "OpenCV", "GraphQL"]}></Skills>

                <Skills name = "AI & Machine Learning" 
                skills = {["Scikit-Learn", "Tensorflow", "PyTorch", "HuggingFace", "LangChain", "CUDA"]}></Skills>

                <Skills name = "Hardware & Embedded" 
                skills = {["Arduino architectures", "Rasberry Pi", "Assembly", "FreeRTOS", "EasyEDA",]}></Skills>

                <Skills name = "Cloud & DevOps" 
                skills = {["AWS", "Docker", "Terraform", "Git", "CI/CD", "TDD"]}></Skills>

            </div>

        </div>
    )
}
