import React, { useEffect } from "react";
import "../css/here.css";
import { Cursor, useTypewriter, Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  // const { typewriterText } = useTypewriter({
  //   words: ["EleganceCraft Websites", "Mobile Apps", "Pos Software"],
  //   loop: true,
  // });;
  return (
    <div id="hero" className="pt-16 w-full min-h-screen flex justify-center items-center relative">
      <div className="max-w-5xl p-8 flex items-center sm:flex-row flex-col w-full">
        <div className="flex-1">
          <div className="content">
            <h1 className="endless text-6xl md:text-7xl lg:text-8xl mb-2">
              ENDLESS
            </h1>
            <h1 className="raven text-6xl text-right md:text-7xl lg:text-8xl mb-8 pr-8 md:pr-0">
              RAVEN
            </h1>
            <h3 className="text-xl lg:text-2xl font-semibold mb-8 text-slate-100">
              Seamless Solutions, Endless Innovation
            </h3>
          </div>
        </div>
        <div className="flex-1">
          <img src="./Raven2.png" alt="" className="w-full object-cover " />
        </div>
      </div>
      <div className="absolute hidden lg:block bottom-20 text-3xl font-bold drop-shadow-md text-slate-200">
        We are creating{" "}
        <span className="text-red-600">
          <Typewriter
            words={["Websites", "Mobile Apps", "Pos Software"]}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <Cursor />
      </div>
    </div>
  );
}
