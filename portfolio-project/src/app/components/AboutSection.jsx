"use client";
import React, { useTransition, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TabButton from "./animated-section2/TabButton";
import useInView from "./useInView";
import AnimatedImageOne from "./animated-section2/1AnimatedImage";
import AnimatedTitle from "./animated-section2/2AnimatedTitle";
import AnimatedDesc from "./animated-section2/3AnimatedDesc";
import TabData from "./animated-section2/TabData";

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const [tabRef, isInView] = useInView();

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <AnimatedImageOne />
                <div>
                    <AnimatedTitle />
                    <AnimatedDesc />

                    {/* Tab section with scroll-triggered animation */}
                    <div
                        ref={tabRef}
                        className={`
              transition-all duration-1000 ease-out transform
              ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
                    >
                        {/* Tab Buttons */}
                        <div className="flex flex-row mt-8 space-x-4">
                            <TabButton
                                selectTab={() => handleTabChange("skills")}
                                active={tab === "skills"}
                            >
                                Skills
                            </TabButton>

                            <TabButton
                                selectTab={() => handleTabChange("education")}
                                active={tab === "education"}
                            >
                                Education
                            </TabButton>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-8 relative min-h-[100px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={tab}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full"
                                >
                                    {TabData.find((t) => t.id === tab).content}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
