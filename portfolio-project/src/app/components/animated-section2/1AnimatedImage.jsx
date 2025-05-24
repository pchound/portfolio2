"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useInView from "../useInView"; // adjust the path if needed

const AnimatedImageOne = () => {
    const [ref, isInView] = useInView();

    return (
        <div
            ref={ref}
            className={`
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      `}
        >
            <Image
                src="/images/gumball_darwin.png"
                width={500}
                height={500}
                alt="About Me"
                className="rounded-lg drop-shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            />
        </div>
    );
};

export default AnimatedImageOne;
