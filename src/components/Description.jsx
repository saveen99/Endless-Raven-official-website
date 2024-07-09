import React from "react";

export default function Description() {
  return (
    <div id="about" className="max-w-5xl w-[80%] mx-auto mb-20 lg:mb-32 text-center p-4 lg:p-0 lg:flex lg:justify-between lg:gap-4 lg:items-center">
      <h3 className=" text-3xl lg:text-4xl font-semibold mb-8 drop-shadow-sm lg:w-[40%] lg:text-left">
        <span className="text-red-600 ">
          Innovative Solutions, Seamless Collaboration{" "}
        </span>
        Meet Our Development Team
      </h3> 
      <div className="lg:w-[60%] lg:text-sm xl:text-base">
        <p className="mb-4 text-justify rounded-md shadow-md cursor-default sm:mr-16 hover:scale-105 p-7 shadow-slate-400 sm:mb-8 hover:shadow-red-500 smooth bg-slate-50 hover:bg-white">
          Our dynamic team of software, web, and app developers, designers,
          project managers, and quality assurance testers collaborates
          seamlessly to turn client visions into innovative digital solutions.
          With expertise in various programming languages, frameworks, and
          methodologies, we specialize in delivering top-notch, user-friendly
          software products customized to meet client needs and market demands.
        </p>
        <p className="text-justify rounded-md shadow-md cursor-default sm:ml-16 hover:scale-105 p-7 shadow-slate-400 hover:shadow-red-500 smooth bg-slate-50 hover:bg-white">
          Our versatile team of developers, designers, project managers, and
          testers collaborates seamlessly to create innovative digital
          solutions. With expertise in diverse technologies, we specialize in
          delivering top-notch, user-friendly software tailored to client needs.
        </p>
      </div>
    </div>
  );
}
