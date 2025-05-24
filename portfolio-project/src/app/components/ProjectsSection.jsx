"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import AnimatedTitle from "./animated-section3/1AnimatedTitle";
import projectsData from "./ProjectsData";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <AnimatedTitle />

      <ul className="grid md:grid-cols-2 gap-8 md:gap-12 justify-center">
        {filteredProjects.map((project, index) => {
          const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

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
    </section>
  );
};

export default ProjectsSection;
