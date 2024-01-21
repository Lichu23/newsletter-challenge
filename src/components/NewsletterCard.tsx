import { useState } from "react"
import logo from "../assets/images/icon-list.svg"
import ilustration from "../assets/images/illustration-sign-up-desktop.svg"
import NewsletterInput from "./NewsletterInput"

interface NewsletterCardProps {
    handleForm: () => void
}

const NewsletterCard = ({ handleForm }: NewsletterCardProps) => {
    const [email, setEmail] = useState("")
    const [isError, setIsError] = useState(false)

    const checkEmail = (email: string) => {
        return email
    }

    const showError = () => {
        setIsError(true)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        checkEmail(email) ? handleForm() : showError()
    }

    return (
        <div className="bg-slate-50 w-100% md:w-[700px] flex flex-col-reverse md:flex-row p-5 shadow-2xl shadow-slate-500 rounded-3xl">
            <div className="p-10">
                <h1 className="font-bold text-4xl">
                    Stay updated!
                </h1>
                <p className="py-3 text-lg">Join 60,000+ product managers receiving monthly updates on:
                </p>

                <div className="flex flex-col gap-3 font-bold text-">
                    <div className="flex gap-3">
                        <img src={logo} alt="icono list" width="20px" /><span>Product discovery and building what matters</span>
                    </div>

                    <div className="flex gap-3">
                        <img src={logo} alt="icono list" width="20px" />
                        <span>
                            Measuring to ensure updates are a success
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <img src={logo} alt="icono list" width="20px" />
                        <span>
                            And much more!
                        </span>
                    </div>
                </div>
                <form
                    className="flex flex-col"
                    onSubmit={handleSubmit}
                >

                    <label
                        className="pt-5 uppercase text-gray-500 font-bold text-lg"
                        htmlFor="Email">Email address</label>
                    {isError && <NewsletterInput />}
                    <input
                        type="email"
                        className={` ${isError ? "bg-red-100 border-red-700 placeholder:text-red-900 rounded-b-lg" : "rounded-lg"} shadow appearance-none border rounded-b-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none mb-3`}
                        id="Email"
                        placeholder="email@company.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="py-3 px-3.5 font-medium text-white bg-slate-800 rounded-xl bg-color hover:bg-slate-700 transition-colors uppercase"
                    >
                        Subscribe
                    </button>
                </form>
            </div>





            <img
                className="rounded-xl w-full object-cover md:max-w-[250px]"
                src={ilustration}
                alt="ilustration sign up" />

        </div>
    )
}

export default NewsletterCard