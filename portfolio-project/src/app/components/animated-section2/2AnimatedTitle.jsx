"use client";
import useInView from "../useInView"; // Adjust the path as needed

const AnimatedTitle = () => {
    const [ref, isInView] = useInView();

    return (
        <h2
            ref={ref}
            className={`
        text-4xl font-bold text-white mb-4
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
        >
            About Me
        </h2>
    );
};

export default AnimatedTitle;
