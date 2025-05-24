"use client";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { sendEmail } from "@/lib/actions";
import { useState } from "react";

const EmailSection = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: "",
        message: ''
    });
    const [status, setStatus] = useState({
        success: '', message: ''
    });
    const [isLoading, setIsloading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true)
        setStatus({})

        try {
            const result = await sendEmail({ email: formData.email, subject: formData.subject, message: formData.message })
            if (result.success) {
                setStatus({ success: true, message: "email sent successfully!" })
                setFormData({ email: '', subject: '', message: '' })
            } else {
                setStatus({ success: false, message: "Failed to send email" })
            }

        } catch (error) {
            setStatus({ success: false, message: "An unexpected error occured" })
        } finally {
            setIsloading(false)
        }
    }
    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >

            <div className="">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="github.com">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="linkedin.com">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>

            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div mb-6="true">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="example@gmail.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block text-sm mb-2 font-medium">
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-400 to-blue-400
                            hover:from-cyan-500 hover:to-blue-600
                            text-black font-medium py-2.5 px-5 rounded-lg w-full
                            cursor-pointer
                            transition-colors duration-300 ease-in-out"
                    >
                        {isLoading ? "Sending..." : 'Send Email'}
                    </button>
                    {
                        status.message && (
                            <div className={`mt-4 p-3 rounded-md ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{status.message}</div>
                        )
                    }
                </form>
            </div>
        </section>

    );
}

export default EmailSection;