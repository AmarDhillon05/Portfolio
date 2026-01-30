import Header from "../components/Header"
import Typed from "../components/Typed"
import Project from "../components/Project"

export default function Exp(){
    return (
        <div className = "flex items-center justify-center flex-col  w-full overflow-y-scroll">
            <Header name = "experience"></Header>

<div>
            <div>
                <Typed text = {`Work experience`}
                        classList = "text-4xl py-6 w-auto text-center m-auto"
                        delay = {500}
                    ></Typed>



                <div className = "flex flex-row flex-wrap w-full justify-center items-center items-stretch">

         <Project
                        name = "SDE Intern"
                        tagline = "Narb | June 25 - August 25"
                        description = {[`- Leading a startup team on creating a shoe collector's app with utilities for all sneakerheads`,

                                `- Fine-tuned a PyTorch CLIP + YOLO pipeline for shoe classification in the wild, achieving a ~82% real-time accuracy during beta testing`,

                                `- Developed Flask REST API endpoints for retrieving and processing images with NumPy + Albumentations for accelerated model training`,

                                `- Orchestrated SageMaker hosting of real-time inference models during beta deployment with CloudWatch monitoring foremphasis on cost optimization 
                                and model drift detection while supporting 50+ beta users`

                            ]}
                    ></Project>

                            
                        
                    <Project
                        name = "ML Research Assistant"
                        tagline = "University of Maryland | Feb 25 - Present"
                        description = {[`- Evaluating attention enhancements for a LSTM-based wind speed forecaster in PyTorch for locating optimal wind turbine
setups for battery charging with a speed-performance balance, achieving ~2 MPH accuracy improvement`,

                                `- Collaborated with a cross-functional engineering team to develop an optimized data ingestion pipeline for communicating
ESP32-read signal data onto Flask data analysis servers to streamline model evaluation`,

                                `- Formulated and developed an interactive AR presentation experience using Mapbox (C#) that accumulates and 
                                presents model output on optimal charging setups`,

                                `- Aiding in the optimization of a PWM battery charging module to be able to charge multiple batteries 
                                efficiently while sending data to our Rasberry Pi server setup`,
                            ]}
                    ></Project>
        

                    <Project
                        name = "Robotics Researcher"
                        tagline = "Northrop-Grumman Innovation Lab | Jan 25 - Jul 25"
                        description = {[`- Implemented a Python OpenCV algorithm to detect Ocean Mines using a drone with >70% accuracy`,

                                `- Utilized QGroundControl alongside custom C++ scripts for intelligent drone maneuvering`,

                                `- Optimized the sensor layout on a PCB to reduce latency taking multiple inputs from Arduinos attatched to our drone`,
                            ]}
                    ></Project>
        

                    <Project
                        name = "SWE Intern"
                        tagline = "BuildUrFuture | Sep 25 - Nov 25"
                        description = {[`- Worked on a cross-functional team utilizing modern AI enhancements for an app conducting intelligent job search and matching for students`,

                                `- Refactored Spring Boot microservices and tests for REST endpoints of a Cohere + Pinecone semantic job search RAG
pipeline, contributing to a ~44% projected cost decrease`,

                                `-  Implemented a Kinesis pipeline into S3 with AWS Athena querying functionality in a resume ETL, allowing for a ~30%
cost optimization in resume-retrieval features with increased scalability and usability among SQL developers`,
                            ]}
                    ></Project>


                    <Project
                        name = "Co-Founder"
                        tagline = "TerpLabs | June 25 - Present"
                        description = {[`- Leading 50+ developers across 5 cross-functional teams on building campus utilities integrated with UMD services`,

                                `- Aided in the development of Tortuga, an enhanced scheduling app serving 2,000+ users, in migrating its BeautifulSoup4 scraping function
to run as a cron-style Lambda function fronted by API Gateway to support caching during heavy traffic`,

                                `- Currently leading a team of developers on TerpMeals, a campus dining app, while engineering a meal-suggestion RAG pipeline for the app
                                using GPT-4o mini, ChromaDB, and
Sentence-BERT on Cheerio-scraped recipe data, achieving ~93% user satisfaction from student testers`,
                            ]}
                    ></Project>



                    <Project
                        name = "Sustainability Analytics Researcher"
                        tagline = "University of Maryland | Jan 25 - December 25"
                        description = {[`- Analyzed datasets regarding the adaptation of "smart-city" utilities in the Baltimore area`,

                                `- Utilized R to find trends and evaluated performance of a regression model to understand the feasibility of smart-city tools`,

                                `- Created an organized research poster presenting the findings and further steps to be taken`,
                            ]}
                    ></Project>
        
                </div>
            </div>


        <div>
            <Typed text = {`Projects`}
                classList = "text-4xl py-6 w-auto text-center m-auto"
                delay = {500}
            ></Typed>


            <div className = "flex flex-row flex-wrap w-full justify-center items-center items-stretch">


                <Project
                    name = "Echelon"
                    tagline = "A ranking app powered by modern vector search advancements"
                    description = {[
                        
                        `- Developed a gamified experience for hosting hackathons and competitive events using React, Express, and MongoDB`,


                        `- Utilized Pinecone embeddings predicted by currently trained versions of CLIP and Wave2Vec to power intelligent matchmaking`,

                            `- Built a Mistral-based LangChain pipeline with optimized prompting for faster hackathon search and summarization
`
                        ]}
                    github = "https://github.com/AmarDhillon05/echelon"
                    site = "https://echelon-ob8vzl020-amardhillon05s-projects.vercel.app/"
                ></Project>

                
                <Project
                    name = "PianoAI"
                    tagline = "A beginner-friendly AI-assisted piano music composer"
                    description = {[`-  Created a beginner-friendly React app containing a simple note composition interface used by myself and friends for teaching basic composition to elementary-school classes`,

                            `- Designed a PyTorch transformer for generating piano notes optimized to use <128 MB during inference on 50+ scores`,

                            `- Utilized TorchScript (C++) on AWS Lambda for JIT model deployment, increasing inference speeds by ~33%`,
                        ]}
                    github = "https://github.com/AmarDhillon05/PianoAI"
                    site = "https://pianoai.adh05.com"
                ></Project>
      

                <Project
                    name = "$hoes"
                    tagline = "A forecaster for shoe resale prices to aid in smart decisions"
                    description = {[`- Created web scrapers using BeautifulSoup and Selenium to gathers upcoming shoe prices from popular brand sites`,

                            `- Trained a SkLearn regressor on past resell data to predict future resale prices with sub 5$ testing loss to educate resellers`,

                            `- Deployed a React app displaying the results and educating resellers on which shoes are most likely to be good buys`,
                        ]}
                    github = "https://github.com/AmarDhillon05/Shoes"
                    site = "https://shoeapp.adh05.com"
                ></Project>
     


                <Project
                    name = "CapNet"
                    tagline = "An original architecture inspired by the Vision Transformer on the CIFAR-100 Dataset"
                    description = {[`- Rebuilt and experimented with the Vision Transformer from the original paper`,

                            `- Experimented with using Convolutional attention blocks based on a paper about similar practices`,

                            `- Combined the model with beam search and optimizations to create a fast, efficient captioner`,
                        ]}
                    github = "https://github.com/AmarDhillon05/CapNet"
                    site = "https://www.kaggle.com/code/amardhillon05/vit-experiments-on-cifar-subset"
                ></Project>


                <Project
                    name = "UVA Meals"
                    tagline = "A simplification of UVA's menu system for HooHacks '25"
                    description = {[`- Created a React Native app to show a simplified version of UVA's menu that was scraped with Selenium`,

                            `- Utilized MongoDB for fast storage and food tracking per day`,

                            `- Created an algorithm for users to have their target nutrition generated from their goals`
                        ]}
                    github = "https://github.com/AmarDhillon05/UVA-Meals"
                ></Project>



                <Project
                    name = "NASA Image Repository"
                    tagline = "A simple tool to facilitate the access of NASA's historical info"
                    description = {[`- Created APIs to stream data from NASA's API into interpretable forms`,

                            `- Utilized React to create a UI that allows users to navigate historical entries`
                        ]}
                    github = "https://github.com/AmarDhillon05/Nasa-Image-Lookup"
                ></Project>


               <Project
                    name = "Dorbel"
                    tagline = "An app connected to a security system for recognizing faces at your door"
                    description = {[`- Created a Kivvy app in Python for adding faces to be recognized by an algorithm`,

                            `- Used a pretrained MTCNN model on a Rasberry PI to identify unfamiliar faces on a camera input with little delay`,

                            `- Stored data in MySQL databases for fast and simple user querying`
                        ]}
                    github = "https://github.com/AmarDhillon05/Doorbell-App"
                ></Project>

            </div>

        </div>
</div>
        </div>
    )
}
