import React from "react";
import ProjectList from "./ProjectList";

const Project = ({ isDarkMode }) => {
  return (
    <div className="py-20">
      <div>
        <h2
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } w-full text-center text-[22px] font-Poppins font-semibold`}
        >
          Past Project Experience
        </h2>
        <p
          className={`text-center ${
            isDarkMode ? "dark-gradient-text" : "light-gradient-text"
          } font-Poppins text-[14px]`}
        >
          Explore the projects I've worked on so far
        </p>
      </div>
      <ProjectList isDarkMode={isDarkMode}/>
    </div>
  );
};

export default Project;
