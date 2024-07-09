import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import "../css/header.css";

export default function NavigationBar() {
  const [showMenu, setShowMeu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="fixed w-full mx-auto flex justify-between gap-2 items-center p-4 px-6 cov">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="./Endless Raven Logo.png"
          alt="logo"
          className="w-16 object-cover"
        />
        {/* <span className="text-xl font-semibold uppercase">Endless Raven</span> */}
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <a href="#hero" className="link">
          Home
        </a>
        <a href="#about" className="link">
          About
        </a>
        <a href="#services" className="link">
          Services
        </a>
        <a href="#reviews" className="link">
          Reviews
        </a>
        <a href="#portfolio" className="link">
          Portfolio
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
      </div>

      {/* mobile menu bar  */}
      <div className="md:hidden relative">
        <div onClick={() => setShowMeu(!showMenu)} className="cursor-pointer">
          {showMenu ? (
            <IoClose className="w-8 h-8" />
          ) : (
            <LuMenu className="w-8 h-8" />
          )}
        </div>
        <div
          className={`absolute ${
            showMenu ? "flex" : "hidden"
          } flex-col gap-2 w-56 -left-48 p-4 rounded-md bg-red-100 border-2 border-red-500`}
        >
          <a href="#hero" className="link" onClick={() => setShowMeu(false)}>
            Home
          </a>
          <a href="#about" className="link" onClick={() => setShowMeu(false)}>
            About
          </a>
          <a
            href="#services"
            className="link"
            onClick={() => setShowMeu(false)}
          >
            Services
          </a>
          <a href="#reviews" className="link" onClick={() => setShowMeu(false)}>
            Reviews
          </a>
          <a
            href="#portfolio"
            className="link"
            onClick={() => setShowMeu(false)}
          >
            Portfolio
          </a>
          <a href="#contact" className="link" onClick={() => setShowMeu(false)}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
