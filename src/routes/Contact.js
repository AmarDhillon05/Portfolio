import { useState } from "react"
import Header from "../components/Header"
import Typed from "../components/Typed"

export default function Home() {
    const [status, setStatus] = useState("") // feedback message
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)

        setSending(true)
        setStatus("")

        try {
            const response = await fetch("https://formspree.io/f/xpqrkpvg", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: data,
            })

            if (response.ok) {
                setStatus("Message sent successfully!")
                form.reset()
            } else {
                const result = await response.json()
                setStatus("Error: " + (result?.error || "Something went wrong"))
            }
        } catch (err) {
            setStatus("Error: " + err.message)
        } finally {
            setSending(false)
        }
    }

    return (
        <div className="flex items-center justify-center flex-col min-h-screen w-full">
            <Header name="contact" />


            <form
                className="flex flex-col items-center w-full max-w-2xl py-10"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-4 my-3 text-xl bg-transparent border border-gray-400 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-4 my-3 text-xl bg-transparent border border-gray-400 rounded"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full p-4 my-3 text-xl bg-transparent border border-gray-400 rounded"
                    required
                />
                <button
                    type="submit"
                    className="mt-6 px-8 py-3 text-xl border border-gray-400 rounded hover:bg-gray-200 hover:text-black transition-all"
                    disabled={sending}
                >
                    {sending ? "Sending..." : "Send"}
                </button>
                {status && <p className="mt-4 text-lg">{status}</p>}
            </form>

            <div className="pb-10 px-6">
                <div className="flex flex-wrap justify-center text-2xl md:text-3xl text-center leading-relaxed">
                    <a
                        href="mailto:amardhillon844@gmail.com"
                        className="hover:underline hover:text-gray-200 transition-all px-1"
                    >
                        <Typed text="Email" delay={500} />
                    </a>

                    <span className="px-3">|</span>

                    <a
                        href="tel:+18482313165"
                        className="hover:underline hover:text-gray-200 transition-all px-1"
                    >
                        <Typed text="Phone" delay={500} />
                    </a>

                    <span className="px-3">|</span>

                    <a
                        href="https://www.linkedin.com/in/amar-dhillon-917537261/"
                        className="hover:underline hover:text-gray-200 transition-all px-1"
                    >
                        <Typed text="LinkedIn" delay={500} />
                    </a>

                    <span className="px-3">|</span>

                    <a
                        href="https://github.com/AmarDhillon05"
                        className="hover:underline hover:text-gray-200 transition-all px-1"
                    >
                        <Typed text="GitHub" delay={500} />
                    </a>

                    <span className="px-3">|</span>

                    <a
                        href="https://www.kaggle.com/amardhillon05"
                        className="hover:underline hover:text-gray-200 transition-all px-1"
                    >
                        <Typed text="Kaggle" delay={500} />
                    </a>
                </div>
            </div>
        </div>
    )
}
