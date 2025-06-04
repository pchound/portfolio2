"use client";
import useInView from "../useInView"; // Adjust path if needed

const AnimatedTitle = () => {
    const [ref, isInView] = useInView();

    return (
        <h2
            ref={ref}
            style={{ marginTop: "100px" }}
            className={`
        text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
        >
            My Projects
        </h2>
    );
};

export default AnimatedTitle;
