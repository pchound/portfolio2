"use client";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { sendEmail } from "@/lib/actions";
import { useState } from "react";
import { motion } from "framer-motion";

import AnimatedTitle from "./animated-section4/1AnimatedTitle";
import AnimatedDesc from "./animated-section4/2AnimatedDesc";
import AnimatedLinks from "./animated-section4/3AnimatedLinks";

// Animation variants
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const inputVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const EmailSection = () => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({ success: "", message: "" });
    const [isLoading, setIsloading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);
        setStatus({});

        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setStatus({ success: true, message: "Email sent successfully!" });
                setFormData({ email: "", subject: "", message: "" });
            } else {
                setStatus({ success: false, message: "Failed to send email" });
            }
        } catch (error) {
            setStatus({ success: false, message: "An unexpected error occurred" });
        } finally {
            setIsloading(false);
        }
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-30 relative"
        >
            <div>
                <AnimatedTitle />
                <AnimatedDesc />
                <AnimatedLinks />
            </div>

            <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.div variants={inputVariants}>
                    <label
                        htmlFor="email"
                        className="text-white block mb-2 text-sm font-medium"
                    >
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
                </motion.div>

                <motion.div variants={inputVariants}>
                    <label
                        htmlFor="subject"
                        className="text-white block text-sm mb-2 font-medium"
                    >
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
                </motion.div>

                <motion.div variants={inputVariants}>
                    <label
                        htmlFor="message"
                        className="text-white block text-sm mb-2 font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk"
                    />
                </motion.div>

                <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-600 text-black font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer transition-colors duration-300 ease-in-out"
                    variants={inputVariants}
                >
                    {isLoading ? "Sending..." : "Send Email"}
                </motion.button>

                {status.message && (
                    <motion.div
                        variants={inputVariants}
                        className={`mt-4 p-3 rounded-md ${status.success
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                            }`}
                    >
                        {status.message}
                    </motion.div>
                )}
            </motion.form>
        </section>
    );
};

export default EmailSection;
