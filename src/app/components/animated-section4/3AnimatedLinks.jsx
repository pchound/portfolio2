"use client";
import useInView from "../useInView"; // Adjust path if needed
import Link from "next/link";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Image from "next/image";

const AnimatedLinks = () => {
    const [ref, isInView] = useInView();

    return (
        <div
            ref={ref}
            className={`socials flex flex-row gap-4 transition-all duration-1000 ease-out
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
        >
            <Link href="https://github.com/pchound" target="_blank">
                <Image
                    src={GithubIcon}
                    alt="Github Icon"
                    className={`transition-transform duration-500 ${isInView ? "scale-100" : "scale-75"}`}
                />
            </Link>
            <Link href="https://www.linkedin.com/in/josephgarnerweb/" target="_blank">
                <Image
                    src={LinkedinIcon}
                    alt="Linkedin Icon"
                    className={`transition-transform duration-500 ${isInView ? "scale-100" : "scale-75"}`}
                />
            </Link>
        </div>
    );
};

export default AnimatedLinks;
