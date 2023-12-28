import React, { useState } from "react";
import gitOutlineDark from "../assets/outline-git-dark.png";
import gitOutlineWhite from "../assets/outline-git-white.png";
import resizeWhite from "../assets/resize-white.png";
import resizeDark from "../assets/resize.png";
const ProjectCard = ({ project, isDarkMode }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <div
        className={`p-3 border rounded-md w-full ${
          isDarkMode
            ? "bg-[#202020] border-gray-800"
            : "bg-neutral-200 border-gray-300"
        } ${isHover && " translate-y-[-6px] scale-105"} transition-all`}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={project.posterPath} className="rounded-lg w-full" />
        <h5
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } text-center py-3 font-Poppins`}
        >
          {project.siteName}
        </h5>
        <p
          className={`${
            isDarkMode ? "text-gray-300" : "text-black"
          } text-[13px]`}
        >
          {project.readMeText}
        </p>
        <h4
          className={`py-5 ${
            isDarkMode ? "text-[#f7d557]" : "text-[#0074cc]"
          } font-Poppins`}
        >
          {project.createBy}
        </h4>
        <div className="w-fit ml-auto flex gap-3">
          <a href={project.repo_url} target="_blank" className="cursor-pointer">
            <img
              src={isDarkMode ? gitOutlineWhite : gitOutlineDark}
              className="w-[25px]"
              loading="lazy"
            />
          </a>
          {project.site_url && (
            <a
              href={project.site_url}
              target="_blank"
              className="cursor-pointer"
            >
              <img
                src={isDarkMode ? resizeWhite : resizeDark}
                className="w-[25px]"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
