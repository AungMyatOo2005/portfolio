import React, { useState } from "react";

const SkillAndTools = ({ tech, isDarkMode }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      key={tech.id}
      className={`flex items-center gap-5 py-4 px-4 rounded-md border ${
        isHover && `${isDarkMode ? "bg-[#ffdd6127] " : "bg-[#5cb8ff59] "} `
      } ${isDarkMode ? "border-[#aa923b]" : "border-[#0074cc]"}`}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={tech.icon}
        className={`w-[40px] ${
          isHover && " scale-110 translate-y-[-2px]"
        } transition-all `}
      />
      <div className="relative">
        <h3
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } font-semibold ${
            isHover && "translate-y-[-6px] scale-105"
          } transition-transform`}
        >
          {tech.text}
        </h3>
        {tech.lvl && isHover && (
          <span
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            } text-[13px] lvl absolute bottom-[-10px]`}
          >
            {tech.lvl}
          </span>
        )}
      </div>
    </div>
  );
};

export default SkillAndTools;
