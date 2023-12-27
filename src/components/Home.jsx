import React, { useEffect, useState } from "react";
import me from "../assets/me.jpg";
const Home = ({ isDarkMode }) => {
  const [text, setText] = useState("Web Developer");
  useEffect(() => {
    const change = () => {
      setTimeout(() => {
        setText("Web Developer");
      }, 0),
        setTimeout(() => {
          setText("Front-end Developer");
        }, 3500);
    };
    change();
    setInterval(change, 7000);
  }, []);
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-10 md:flex-row flex-col-reverse">
        <div className="flex flex-col items-start md:translate-x-0 sm:translate-x-[-120px]">
          <p
            className={`${
              isDarkMode ? "text-[#f7d557]" : "text-[#0074cc] "
            } text-[14px] font-Poppins`}
          >
            Hello World, I'm
          </p>
          <h1
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } font-bold text-[32px] font-Poppins`}
          >
            Aung Myat Oo
          </h1>
          <div className="w-full">
            <div className="flex flex-col items-start animate-text-box">
              <h4
                className={`${
                  isDarkMode ? "dark-gradient-text" : "light-gradient-text"
                } text-[20px] font-semibold animate-text overflow-hidden`}
              >
                {text}
              </h4>
              <div className="flex items-center">
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } text-[14px]`}
                >
                  Welcome to my personal website.
                </p>
                <p className="animate-icon">👋</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[250px] sm:w-[300px] z-5">
          <img
            src={me}
            className={` w-full object-cover rounded-full border-4 animate-img md:translate-x-0 sm:translate-x-[120px] ${
              isDarkMode
                ? "border-[#f7d557] shadow-[0px_0px_50px_10px_rgba(247,213,87,0.4)]"
                : "border-[#0074cc] shadow-[0px_0px_50px_10px_rgba(0,116,204,0.8)]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
