"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useInView from "../useInView"; // adjust path if needed

const AnimatedImage = () => {
    const [ref, isInView] = useInView();

    return (
        <Image
            ref={ref}
            src="/images/joseph-garner.jpg"
            alt="Joseph Garner"
            width={300}
            height={300}
            className={`
        rounded-full relative top-6 sm:left-4 transition-all duration-1000 ease-out transform
        drop-shadow-[0_0_25px_rgba(0,0,0,0.5)]
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
        />
    );
};

export default AnimatedImage;
