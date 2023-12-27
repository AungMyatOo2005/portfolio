import React from "react";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";
const ProjectList = ({ isDarkMode }) => {
  return (
    <div className="grid grid-cols-3 mt-16 gap-5 w-full px-10">
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
