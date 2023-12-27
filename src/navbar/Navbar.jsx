import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import gitWhite from "../assets/gitWhite.png";
import gitDark from "../assets/gitDark.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [toggle, setToggle] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode((pre) => !pre);
  };

  {
    isDarkMode
      ? document.body.classList.remove("light-theme")
      : document.body.classList.add("light-theme");
  }
  return (
    <nav
      className={`fixed flex items-center justify-between py-4 px-6 ss:px-14 sm:px-20 w-full backdrop-blur-[5px] z-[10] ${
        isDarkMode ? "bg-[#16161656]" : "bg-[#b9b9b95d]"
      }
    `}
    >
      <h2
        className={` ${
          isDarkMode ? "text-[#f7d557]" : "text-[#0074cc]"
        } text-[20px] font-Poppins font-semibold`}
      >
        aungMyatOo();
      </h2>
      <ul className="text-gray-500 md:flex hidden font-semibold first-ul">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/project"}>Project</NavLink>
        <div className="bar"></div>
      </ul>
      <div className="flex items-center gap-5">
        <button onClick={handleDarkMode}>
          {isDarkMode ? (
            <SunIcon className="w-[30px] text-white" />
          ) : (
            <MoonIcon className="w-[30px] text-black" />
          )}
        </button>
        <a
          className="w-[40px] cursor-pointer active:scale-[0.97] md:flex hidden"
          href="https://github.com/AungMyatOo2005"
          target="_blank"
        >
          <img src={isDarkMode ? gitWhite : gitDark} className="w-full" />
        </a>
        <button
          className="md:hidden block text-white text-[28px] font-semibold font-Poppins"
          onClick={() => setToggle((pre) => !pre)}
        >
          {toggle ? (
            <XMarkIcon
              className={`w-[30px] ${isDarkMode ? "text-white" : "text-black"}`}
            />
          ) : (
            <Bars3BottomRightIcon
              className={`w-[30px] ${isDarkMode ? "text-white" : "text-black"}`}
            />
          )}
        </button>
      </div>

      {toggle && (
        <div
          className={`md:hidden flex flex-col items-center absolute py-6 px-16  top-[70px] right-6  rounded-lg toggle ${
            isDarkMode ? "bg-[#2b2b2b]" : "bg-[#c4c4c4]"
          }`}
        >
          <ul className=" flex flex-col items-center gap-2  text-gray-500 font-semibold second-ul">
            <NavLink onClick={() => setToggle((pre) => !pre)} to={"/"}>
              Home
            </NavLink>
            <NavLink onClick={() => setToggle((pre) => !pre)} to={"/about"}>
              About
            </NavLink>
            <NavLink onClick={() => setToggle((pre) => !pre)} to={"/project"}>
              Project
            </NavLink>
          </ul>
          <a
            className="w-[40px] cursor-pointer active:scale-[0.97] mt-5"
            onClick={() => setToggle((pre) => !pre)}
            href="https://github.com/AungMyatOo2005"
            target="_blank"
          >
            <img src={isDarkMode ? gitWhite : gitDark} className="w-full" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
