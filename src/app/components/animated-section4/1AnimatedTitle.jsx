"use client";
import useInView from "../useInView"; // Adjust path if needed

const AnimatedTitle = () => {
    const [ref, isInView] = useInView();

    return (
        <h5
            ref={ref}

            className={`
         text-xl font-bold text-white my-2
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
        >
            Let's Connect
        </h5>
    );
};

export default AnimatedTitle;