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
                            name = "Mobile App Dev Intern"
                            tagline = "Narb | Jun 25 - Present"
                            description = {[
                                `- Leading a startup team on an all-in-one shoe collector's app to facilitate the lives of sneakerheads`
                                
                                `- Experimenting with modelling and deployment of a computer vision application to recognize shoes in the wild`

                                `- Architecturing the backend to optimize for cost while taking in data from various APIs, utilizing an AWS stack for deployment and monitoring`

                                `- Migrating the code infrastructure to React Native + Express from a web alpha`
                            ]}
                        
                    <Project
                        name = "ML Research Assistant"
                        tagline = "University of Maryland | Feb 25 - Present"
                        description = {[`- Developed a LSTM-based  wind speed predictor to find optimal turbine locations to 
                            power EV chargers`,

                                `- Working on integrating Python socket pipelines to stream from  into a central Flask server for 
                                fast data collection and model training`,

                                `- Utilizing trained models, weather APIs, and Mapbox in Unity to create an AR 
                                experience for visualizations of optimal EV charger locations`,

                                `- Aiding in the optimization of a PWM battery charging module to be able to charge multiple batteries 
                                efficiently while sending data to our Rasberry Pi server setup`,
                            ]}
                    ></Project>
        

                    <Project
                        name = "Robotics Researcher"
                        tagline = "Northrop-Grumman Innovation Lab | Jan 25 - Jul 25"
                        description = {[`- Implemented a Python OpenCV algorithm to detect Ocean Mines using a drone with >70% accuracy`,

                                `- Utilized QGroundControl alongside custom Python scripts for intelligent drone maneuvering`,

                                `- Optimized the sensor layout on a PCB to easily work on a 2-layer board using a single MCU alongside other drones`,
                            ]}
                    ></Project>
        

                    <Project
                        name = "Software Development Intern"
                        tagline = "BuildUrFuture | May 25 - August 25"
                        description = {[`- Integrated vector search on cloud instances to utilize market trends & power intelligent job search`,

                                `- Implemented scalable data storage and querying using Firebase and Amazon S3 with Athena for analytics and tracking`,

                                `- Developed agile workflows with Notion dashboards and scheduling tool automations in Python, establishing team coordination at an early-stage startup`,
                            ]}
                    ></Project>


                    <Project
                        name = "Co-Founder"
                        tagline = "TerpLabs | Apr 25 - Present"
                        description = {[`- Co-Founded TerpLabs, a student org. at UMD creating apps and utilities for students, and leading the development of TerpMeals`,

                                `- Built asynchronous Puppeteer scripts hosted on Lambda functions for fast scraping of 200+ menu items and nutritional information`,

                                `- Implemented a Mistral-powered workflow for AI-generated nutrition plans that have received >80% satisfaction rates`,

                                `- Establishing organization for bootcamps and project teams to give students real-world experience in both building and growing a product`,
                            ]}
                    ></Project>



                    <Project
                        name = "Sustainability Analytics Researcher"
                        tagline = "University of Maryland | Jan 25 - Present"
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
                    description = {[`- Utilized Pinecone embeddings predicted by currently trained versions of CLIP and Wave2Vec to power intelligent matchmaking`,

                            `- Created a versatile API for embedding as Fargate EC2 tasks for simple, low-cost tasks on a simple Flask APIs, and with deployment automated with Terraform`,

                            `- Made fast CRUD functionality with MongoDB + Express for APIs and React for the frontend`,
                        ]}
                    github = "https://github.com/AmarDhillon05/echelon"
                    site = "https://github.com/AmarDhillon05/echelon"
                ></Project>

                
                <Project
                    name = "PianoAI"
                    tagline = "A beginner-friendly AI-assisted piano music composer"
                    description = {[`- Created a NextJS app with Vexflow and ToneJS to create a simple note composition interface used for teaching beginners`,

                            `- Developed a PyTorch LSTM-based next-note predictor to generate piano notes with ~0.03 MSE loss to  and deployed as an EC2 API to aid in creative composition`,

                            `- Utilized DynamoDB to provide CRUD functionality for saving, sharing and editing compositions in the app`,
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
