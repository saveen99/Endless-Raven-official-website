import React from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  return (
    <div id="portfolio" className="max-w-5xl w-[80%] mx-auto mb-20 lg:mb-32">
      <h2 className="heading">Our Works</h2>
      <p className="mb-8">
        Explore my diverse portfolio, featuring web projects, apps, and POS
        systems, each crafted with innovation and precision
      </p>
      <div className="w-full flex flex-col gap-2 lg:gap-8 md:flex-row">
        
        <div
          className="rounded-lg text-white p-4 bg-gradient-to-tr from-pink-600 to-pink-300 h-40 md:h-52 md:flex-1 flex flex-col items-start justify-between hover:from-pink-400 hover:to-pink-800 cursor-pointer hover:scale-105 smooth"
          onClick={() => {
            navigate("/web");
          }}
        >
          <p className="text-xl font-semibold ">Web Development</p>
          <p className="text-sm text-pink-100 ">
            HTML, CSS,PHP, JS, Bootstrap, Tailwind CSS, ReactJS, Next JS,
            NodeJS, MySQL
          </p>
          <button className="">View More</button>
        </div>
        
        <div
          className="rounded-lg text-white p-4 bg-gradient-to-tr from-fuchsia-600 to-fuchsia-300  h-40 md:h-52 md:flex-1  flex flex-col items-start justify-between hover:from-fuchsia-400 hover:to-fuchsia-800 cursor-pointer hover:scale-105 smooth"
          onClick={() => {
            navigate("/pos");
          }}
        >
          <p className="text-xl font-semibold ">POS System Development</p>
          <p className="text-sm text-pink-100 ">Java, MySQL ,c#, MongoDB</p>
          <button className="">View More</button>
        </div>
        
        <div
          className="rounded-lg text-white p-4 bg-gradient-to-tr from-rose-600 to-rose-300 h-40 md:h-52 md:flex-1  flex flex-col items-start justify-between hover:from-rose-400 hover:to-rose-800 cursor-pointer hover:scale-105 smooth"
          onClick={() => {
            navigate("/mobile");
          }}
        >
          <p className="text-xl font-semibold ">
            Mobile Application Development
          </p>
          <p className="text-sm text-pink-100">
            React Native, MySQL, PHP, Typescript, JavaScript,Firebase
          </p>
          <button className="">View More</button>
        </div>
      
      </div>
    </div>
  );
}
