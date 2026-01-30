import { useState } from "react"
import Typed from "./Typed"

export default function Project({ name, tagline, description, github, site, classList = "" }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div
                className={`flex items-center justify-center flex-col border-white border-2 w-1/4 mx-2 my-2 py-2 min-h-[150px] px-4 text-center ${classList}`}
            >
                <Typed text={name} classList="text-4xl font-bold" blinkTimeout={2000}/>

                <p className="italic text-2xl">{tagline}</p>

                <button
                    onClick={() => setShowModal(true)}
                    className="italic text-xl text-white transition-all ease-in hover:text-gray-200 duration-500 mt-4"
                >
                    View Description
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto relative border-4 border-white border-dotted">
                        <h2 className="text-3xl font-bold mb-4">{name}</h2>
                        <p className="italic text-2xl mb-4">{tagline}</p>
                        {description.map((item, idx) => (
                            <p key={idx} className="text-xl py-2">
                                {item}
                            </p>
                        ))}

                        <div className="flex flex-row justify-center mt-6">
                            {github && (
                                <a
                                    href={github}
                                    className="italic text-xl mx-2 hover:text-gray-200 hover:underline transition-all duration-500"
                                >
                                    See Github
                                </a>
                            )}
                            {site && (
                                <a
                                    href={site}
                                    className="italic text-xl mx-2 hover:text-gray-200 hover:underline transition-all duration-500"
                                >
                                    See Site
                                </a>
                            )}
                        </div>

                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-6 px-6 py-2 border border-white rounded hover:bg-gray-800 transition-all duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
