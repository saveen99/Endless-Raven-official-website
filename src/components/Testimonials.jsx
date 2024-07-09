import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../css/testimonials.css";

export default function Testimonials() {
  const data = [
    {
      name: "Supun Pathirana",
      mail: "@supunpathirana",
      img: "./testimonials/supun.jpg",
      stars: 4,
      content:
        "I've been using Endless Raven for my business needs, and I must say, it's been a game-changer.The user-friendly interface and robust features have helped streamline our operations efficiently. Highly recommended!",
    },
    {
      name: "Buddika Pradeep",
      mail: "@buddikapradeep",
      img: "./testimonials/buddika.jpg",
      stars: 5,
      content:
        "Being in the tech industry, I've tried numerous software solutions, but none have matched the quality and performance of Endless Raven.From project management to data analytics, their suite of products has become indispensable for our organization.",
    },
    {
      name: "vimukthi manchanayake",
      mail: "@vimukthiManchanayake",
      img: "./team/wimukthi.jpeg",
      stars: 5,
      content:
        "As a startup founder, I needed software that could scale with my growing business.Endless Raven not only met but exceeded my expectations.Their customizable solutions have empowered us to adapt to changing market needs seamlessly.",
    },
    {
      name: "Pamod Rathnayake",
      mail: "@pamodrathnayake",
      img: "./team/pamod.png",
      stars: 4,
      content:
        "I've been using Endless Raven for my business needs, and I must say, it's been a game-changer.The user-friendly interface and robust features have helped streamline our operations efficiently. Highly recommended!",
    },
    {
      name: "abc Sandaruwan",
      mail: "@abcsandaruwan",
      img: "./team/saveen.jpg",
      stars: 4,
      content:
        "I've been using Endless Raven for my business needs, and I must say, it's been a game-changer.The user-friendly interface and robust features have helped streamline our operations efficiently. Highly recommended!",
    },
  ];

  const [displayData, setDisplayData] = useState(data.slice(0, 3));
  const [showMore, setShowMore] = useState(true);

  const viewMore = () => {
    const remainingData = data.slice(displayData.length);
    if (remainingData.length >= 1) {
      const newData = remainingData.slice(0, Math.min(remainingData.length, 3));
      setDisplayData((prevData) => [...prevData, ...newData]);
    } else {
      setShowMore(false);
    }
  };

  return (
    <div id="reviews" className="max-w-5xl w-[80%] mx-auto mb-20 lg:mb-32 lg:flex lg:gap-4 lg:justify-between ">
      <div className="lg:w-[30%]">
        <h2 className="heading">Testimonials</h2>
        <p className="hidden lg:block">
          Testimonials are like the heartbeat of a business, pulsing with the
          genuine voices of satisfied customers. They serve as beacons of trust,
          guiding potential clients through the tumultuous waters of
          decision-making. Each testimonial is a testament to the quality of
          service rendered, a whispered assurance that echoes louder than any
          advertisement. In a world inundated with marketing noise, testimonials
          cut through the clutter, offering a glimpse into real experiences and
          fostering a connection built on authenticity and reliability.
        </p>
      </div>

      <div className="lg:W-[70%] ">
        <div className="flex flex-wrap items-center justify-center w-full gap-10 mt-8 md:gap-4 md:justify-between lg:justify-end ">
          {displayData.map((user, index) => (
            <div
              className="w-full md:w-48 lg:w-40 xl:w-52 md:h-[400px] rounded-lg shadow-md hover:shadow-red-300 bg-white p-4 md:p-1 xl:p-3 mt-10"
              key={index}
            >
              <div className="w-full h-[40%] flex flex-col gap-1 items-center justify-between -translate-y-12">
                <img
                  src={user.img}
                  className="w-20 h-20 border-4 border-white rounded-full shadow-md shadow-slate-400 "
                />
                <strong className="text-sm">{user.name}</strong>
                <span className="text-xs">{user.mail}</span>
                <div className="flex text-red-600">
                  {Array.from({ length: user.stars }).map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
              </div>

              <div className="h-[60%] bg-red-100 border-4 border-white rounded-lg p-2 overflow-hidden text-sm">
                <p>{user.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-8 text-center">
          <button
            className={`view-more-button ${
              !showMore ? "cursor-not-allowed" : ""
            }`}
            onClick={viewMore}
            disabled={!showMore}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
