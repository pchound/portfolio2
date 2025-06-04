"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useInView from "./useInView";
import TabButton from "./TabButton";
import TabData from "./TabData";

const AnimatedTab = () => {
    const [tab, setTab] = useState("skills");
    const [ref, isInView] = useInView();

    const handleTabChange = (id) => {
        setTab(id);
    };

    return (
        <div
            ref={ref}
            className={`
        transition-all duration-1000 ease-out transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
        >
            <div className="flex flex-row mt-8 space-x-4">
                {TabData.map(({ id, title }) => (
                    <TabButton
                        key={id}
                        selectTab={() => handleTabChange(id)}
                        active={tab === id}
                    >
                        {title}
                    </TabButton>
                ))}
            </div>

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
    );
};

export default AnimatedTab;
