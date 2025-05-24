"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import AnimatedImage from "./animated-section1/AnimatedImage";
import AnimatedButtons from "./animated-section1/AnimatedButtons";
import AnimatedTypeIntro from "./animated-section1/AnimatedTypeIntro";
import AnimatedDesc from "./animated-section1/AnimatedDesc";


const HeroSection = () => {
    return (
        <section className="lg:py-16"
        >
            <div className="grid grid-cols-2 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left ">
                    <AnimatedTypeIntro />
                    <AnimatedDesc />
                    <AnimatedButtons />

                </div>

                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <AnimatedImage />
                </div>
            </div>


        </section>
    );
};

export default HeroSection;