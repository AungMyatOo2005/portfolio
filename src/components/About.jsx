import React, { useState } from "react";
import me from "../assets/me.jpg";
import { techStacks, tools } from "../constants";
import SkillAndTools from "./SkillAndTools";
const About = ({ isDarkMode }) => {
  const [currentText, setCurrentText] = useState("techStack");
  return (
    <div className="pt-24 pb-16 md:px-20 sm:px-16 px-6">
      <div
        className={`py-10 rounded-md w-full ${
          isDarkMode
            ? "bg-[#202020] border-gray-800"
            : "bg-neutral-200 border-gray-300"
        } px-5 border`}
      >
        <div className="flex items-center gap-1">
          <h1
            className={`text-[22px] font-semibold font-Poppins ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            About Me
          </h1>
          <div
            className={`w-[300px] border-b  ${
              isDarkMode ? "border-white" : "border-black"
            }`}
          ></div>
        </div>
        <div className="mt-16 ss:mx-6 flex md:flex-row flex-col justify-between gap-5 items-center">
          <img
            src={me}
            loading="lazy"
            className="w-[70%] sm:w-[500px] md:w-[300px] md:h-[300px] rounded-full object-cover about-img-animation z-[1]"
          />
          <div
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } md:m-0 mt-16 w-fit flex flex-col items-center gap-8 md:max-w-[600px]`}
          >
            <p className="first-about-text w-full text-justify">
              Hello Everyone! My name is Aung Myat Oo. I'm web developer from
              Myanmar,Yangon. I have 6 month experience in front-end web
              development. I really enjoy what I do right now,in my opinion,
              creating programs is not just a job, but also and art that has
              aesthetic value.
            </p>
            <p className="second-about-text w-full text-justify ">
              My job is to build your website to be functional and user-friendly
              yet still attractive. In addition, I provide a personal touch to
              your product and ensure that the website catches attention and is
              easy to use. My goal is to convey your message and identity in the
              most creative way. If you are interested in hiring me, please
              contact the listed contact.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center gap-1 mb-8">
          <div
            className={`${
              isDarkMode ? "border-white" : "border-black"
            } border-b w-[50px]`}
          ></div>
          <h1
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } text-[22px] font-semibold font-Poppins`}
          >
            Skills
          </h1>
        </div>
        <div className="flex gap-5 mb-10">
          <h4
            className={`${
              isDarkMode ? "text-gray-300" : "text-black"
            } font-Poppins cursor-pointer select-none py-2 px-3 rounded-[5px] transition-colors ${
              currentText === "techStack" &&
              `${isDarkMode ? "bg-[#ffdd6160]" : "bg-[#5cb8ff59]"}`
            }`}
            onClick={() => setCurrentText("techStack")}
          >
            Tech Stack
          </h4>
          <h4
            className={`${
              isDarkMode ? "text-gray-300" : "text-black"
            } font-Poppins cursor-pointer select-none py-2 px-3 rounded-[5px] transition-colors ${
              currentText === "tools" &&
              `${isDarkMode ? "bg-[#ffdd6160]" : "bg-[#5cb8ff59]"}`
            }`}
            onClick={() => setCurrentText("tools")}
          >
            Tools
          </h4>
        </div>
        {currentText === "techStack" && (
          <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 techAndTools">
            {techStacks.map((tech) => (
              <SkillAndTools
                tech={tech}
                isDarkMode={isDarkMode}
                key={tech.id}
              />
            ))}
          </div>
        )}
        {currentText === "tools" && (
          <div className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 techAndTools">
            {tools.map((tech) => (
              <SkillAndTools
                tech={tech}
                isDarkMode={isDarkMode}
                key={tech.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
