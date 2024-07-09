import React from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      image: "./card/web.png",
      des: "HTML, CSS,PHP, JS, Bootstrap, Tailwind CSS, ReactJS, Next JS, NodeJS, MySQL",
    },
    {
      title: "Mobile Application Development",
      image: "./card/mobile.png",
      des: "React Native, MySQL, PHP, Typescript, JavaScript,Firebase",
    },
    {
      title: "POS System Development",
      image: "./card/pos.png",
      des: "Java, MySQL",
    },
  ];

  return (
    <div id="services" className="max-w-5xl w-[80%] mx-auto mb-20 lg:mb-32 lg:flex lg:flex-row-reverse lg:items-center">
      <div className="lg:w-[35%]">
        <h2 className="heading">What we do</h2>
        <p className="text-justify mb-8">
          Specializing in web, app, and software development, we provide
          tailored solutions crafted by our experienced team. From dynamic
          websites to intuitive mobile apps and robust software platforms, we
          deliver high-quality products that exceed expectations and empower
          businesses to thrive in the digital age
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 items-center lg:items-start lg:w-[65%] relative">
        {/* for mobile view */}
        {services.map((service, index) => {
          return (
            <div
              className={`h-[150px] w-full lg:w-[250px] lg:h-[300px] bg-white rounded-md flex flex-row lg:flex-col lg:justify-between  p-2 lg:p-5 gap-4 shadow-md cursor-pointer smooth hover:scale-95 ${
                index == 2
                  ? "lg:absolute lg:left-[266px] lg:top-[150px]"
                  : ""
              }`}
              key={index}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-[20%] lg:w-[100px] lg:h-[100px] object-contain lg:object-cover lg:border-none rounded-md shadow-sm lg:shadow-md"
              />
              <div className="flex-1 lg:flex lg:flex-col lg:h-full lg:justify-evenly">
                <p className="font-semibold my-4 lg:text-xl">{service.title}</p>
                <p className="md:text-base text-sm">{service.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
