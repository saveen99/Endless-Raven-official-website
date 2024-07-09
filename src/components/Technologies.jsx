import React from "react";
import '../css/tech.css'

export default function Technologies() {
  const images = [
    "./tech/bootstrap.png",
    "./tech/redux.png",
    "./tech/tailwind.png",
    "./tech/react.png",
    "./tech/nodejs.png",
    "./tech/python.png",
    "./tech/php.png",
    "./tech/mysql.png",
    "./tech/java-script.png",
    "./tech/html-5.png",
    "./tech/css-3.png",

    "./tech/bootstrap.png",
    "./tech/redux.png",
    "./tech/tailwind.png",
    "./tech/react.png",
    "./tech/nodejs.png",
    "./tech/python.png",
    "./tech/php.png",
    "./tech/mysql.png",
    "./tech/java-script.png",
    "./tech/html-5.png",
    "./tech/css-3.png",
  ];
  return (
    <div className="max-w-5xl w-[80%] mx-auto mb-20 lg:mb-32">
      <p className="heading">Explore Our Latest Technologies</p>
      <p className="">
        Experience the fusion of web, app, and software technologies at our
        fingertips. From dynamic web designs to intuitive app interfaces, and
        robust software solutions, we leverage HTML, CSS, JavaScript, React
        Native, Flutter, Python, and Java to create seamless digital experiences
        that elevate your journey.
      </p>
      <div className="tech-slider">
        <div className="tech-slides">
          {images.map((image, index) => {
            return (

                <img src={image} alt="" className="min-w-28 min-h-28 object-contain drop-shadow-md" key={index}/>

            );
          })}
        </div>
      </div>
    </div>
  );
}
