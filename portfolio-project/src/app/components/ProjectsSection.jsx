"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "A Minute with Bart",
      description: "Political Commentary Site",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/pchound/aminutewithbart",
      previewUrl: "http://www.aminutewithbart.com",
    },
    {
      id: 2,
      title: "Endless Road Auto Sales",
      description: "Car sales website",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/pchound/erautosales",
      previewUrl: "http://www.erautosales.com",
    },

  ];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});


  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
);

const cardVariants = {
  initial: { y:50, opacity: 0 },
  animate: { y: 0, opacity: 1},
};

    return (
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            {/*<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
              <ProjectTag
                onclick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
              />
              <ProjectTag
                onclick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
              />

            </div>*/}
            <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 justify-center">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
    );
};

export default ProjectsSection