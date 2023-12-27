import React from "react";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";
const ProjectList = ({ isDarkMode }) => {
  return (
    <div className="grid px-6 xs:px-16 sm:px-20 md:px-36 grid-cols-1 ss:grid-cols-2 md:grid-cols-3 mt-16 gap-5 w-full ">
      {projects.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
};

export default ProjectList;
