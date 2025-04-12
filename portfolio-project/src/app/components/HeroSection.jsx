"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';





const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-2 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hi, I'm {""}
                        </span>

                        <TypeAnimation
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Joseph',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Web Developer',
                            1000,
                            'a Mobile Developer',
                            1000,
                            'a UX/UI Designer',
                            1000
                            ]}
                            wrapper="span"
                            speed={50}
                            
                            repeat={Infinity}
                        />
                        
                    </h1>

                    <p className="text-[#AB7BE] text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

               <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
               {/*<div className="flex flex-row space-x-4">*/}

                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                        <span className="block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-6 py-3 cursor-pointer transition-colors duration-300">
                            Hire Me
                        </span>
                    </button>

                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                        <span className="block bg-[#121212] hover:bg-slate-800 text-white rounded-full px-6 py-3 cursor-pointer transition-colors duration-300">
                            Download CV
                        </span>
                    </button>
                </div>

                </div>

                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/gumball_darwin.png"
                        alt="Gumball and Darwin"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                />
                </div>
                </div>
                </div>
                
            
        </section>
    );
};

export default HeroSection;