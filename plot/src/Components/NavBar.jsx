import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavCon, NavItem } from "../animation/motion";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [color, setColor] = useState(false);
  const [Mob, setMob] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className="w-full mx-auto sticky z-50 top-1 ">
      <motion.div
        variants={NavCon}
        initial="hidden"
        animate="show"
        exit="exit"
        className={
          color
            ? " bg-[#252525]  duration-300 ease-in-out rounded-full container px-2 flex justify-between items-center "
            : "container p-1 flex justify-between items-center"
        }
      >
        <Link to={"/"}>
          <motion.h1
            variants={NavItem}
            className=" text-2xl md:text-3xl font-bold"
          >
            Plot
          </motion.h1>
        </Link>
        <motion.div
          variants={NavItem}
          className="hidden md:flex gap-1 sm:gap-2 px-1 py-2 sm:py-4 font-medium text-sm sm:text-base"
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/discover"}>Discover</Link>
          <Link to={"/trending"}>Trending</Link>
        </motion.div>
        <AiOutlineMenu
          className="block md:hidden"
          size={25}
          onClick={() => setMob(!Mob)}
        />
      </motion.div>


      <div
        className={
          Mob
            ? "bg-[#252525] h-[20%] container  flex flex-col justify-center items-center duration-300 fixed top-10 "
            : "absolute top-[-100%] duration-300 ease-in-out"
        }
      >
        
        <Link to={"/"}>Home</Link>
        <Link to={"/discover"}>Discover</Link>
        <Link to={"/trending"}>Trending</Link>
      </div>
    </div>
  );
};

export default NavBar;
