"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../ProjectCard"; // Adjust the path as needed

const AnimatedProjects = ({ filteredProjects }) => {
    if (!filteredProjects || filteredProjects.length === 0) {
        return null; // Or return a loading spinner/message
    }

    return (
        <ul className="grid md:grid-cols-2 gap-8 md:gap-12 justify-center">
            {filteredProjects.map((project, index) => {
                const [ref, inView] = useInView({
                    triggerOnce: true,
                    threshold: 0.2,
                });

                const cardVariants = {
                    initial: { opacity: 0, y: 50 },
                    animate: { opacity: 1, y: 0 },
                };

                return (
                    <motion.li
                        key={project.id}
                        ref={ref}
                        variants={cardVariants}
                        initial="initial"
                        animate={inView ? "animate" : "initial"}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                );
            })}
        </ul>
    );
};

export default AnimatedProjects;
