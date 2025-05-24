"use client";
import { useEffect, useState } from "react";
import useInView from "../useInView"; // adjust the path as needed

const AnimatedDesc = () => {
    const [ref, isInView] = useInView();

    return (
        <p
            ref={ref}
            className={`
        text-[#ADB7BE] text-base sm:text-lg mb-6 max-w-xl mx-auto
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-20"}
      `}
        >
            I specialize in crafting responsive web applications with intuitive user
            experiences. From sleek front-end designs to efficient back-end systems,
            I bring ideas to life through code.
        </p>
    );
};

export default AnimatedDesc;
