"use client";
import useInView from "../useInView"; // Adjust the path as needed

const AnimatedDesc = () => {
    const [ref, isInView] = useInView();

    return (
        <p
            ref={ref}
            className={`
        text-[#ADB7BE] text-base sm:text-lg max-w-xl mb-6
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-10"}
      `}
        >
            My mission is to create clean, user-friendly digital experiences that make people's lives easier. Beyond code, I care deeply about authentic storytelling and design that resonates emotionally—especially through creative outlets like cartoons and digital art.<br></br><br></br>

            I'm actively seeking opportunities where I can grow as a developer, contribute to meaningful projects, and be part of a team that values creativity, empathy, and technical excellence.


        </p>
    );
};

export default AnimatedDesc;