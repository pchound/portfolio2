"use client";
import { TypeAnimation } from "react-type-animation";
import useInView from "../useInView";

const AnimatedTypeIntro = () => {
    const [ref, isInView] = useInView();

    return (
        <h1
            ref={ref}
            className={`
        text-white mb-4 text-4xl sm:text-5xl lg:leading-normal font-extrabold 
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
        >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">
                Hi, I'm <br />
            </span>

            <TypeAnimation
                sequence={[
                    "Joseph",
                    1000,
                    "a Web Developer",
                    1000,
                    "a Mobile Developer",
                    1000,
                    "a UX/UI Designer",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </h1>
    );
};

export default AnimatedTypeIntro;
