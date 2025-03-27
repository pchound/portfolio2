import React from "react";

const HeroSection = () => {
    return(
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                        Hi, I'm Joseph
                    </h1>

                    <p className="text-[#AB7BE]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;