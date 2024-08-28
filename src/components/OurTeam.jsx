import React from "react";
import "../css/ourteam.css";

export default function OurTeam() {

  const members = [
    {
      name: "Pamod Rathnayake",
      image: "./team/pamod.jpg",
      designation: "Ui/Ux Designer",
    },
    {
      name: "Udara Herath",
      image: "./team/udara.png",
      designation: "Ui/Ux Designer",
    },
    {
      name: "Saveen Maduranga",
      image: "./team/saveen.jpg",
      designation: "Front-End Developer",
    },
    {
      name: "Wimukthi Manchanayaka",
      image: "./team/wimukthi.jpeg",
      designation: "Front-End Developer",
    },
    {
      name: "Ishan Sandaruwan",
      image: "./team/ishan.png",
      designation: "Full-stack Developer",
    },
    {
      name: "Shazna Salman",
      image: "./profile-icon.jpg",
      designation: "Full-stack Developer",
    },
    {
      name: "Ishan Kanishka",
      image: "./team/kanishka.png",
      designation: "Back-End Developer",
    },
  ];

  return (
    <div className="max-w-5xl w-[80%] mx-auto ">
      <h2 className="heading">Our Team</h2>
      <h3 className="mb-2 text-lg text-justify text-slate-800">
        Embracing Diversity, Pursuing Harmony: Meet Our Team
      </h3>
      <p className="mb-6 text-justify">
        Our team at Diverse Minds embodies a rich tapestry of backgrounds,
        experiences, and expertise, converging towards unified goals. Each
        member brings a unique perspective, fostering creativity, innovation,
        and inclusivity in everything we do. Through collaboration and mutual
        respect, we navigate challenges, celebrate successes, and strive towards
        a shared vision of excellence. Together, we leverage our diverse talents
        to achieve impactful outcomes and make a difference in our community and
        beyond.
      </p>
      {/* pb-8 w-full flex flex-col gap-4 lg:gap-6 items-center lg:flex-wrap lg:flex-row */}
      {/* our-team-card lg:w-80 lg:flex-grow smooth */}
      {/* our-team-card-img */}
      {/* our-team-card-name */}
      <div className="flex flex-wrap justify-center gap-2 pb-32 md:gap-4 xl:gap-5 xl:justify-start">
        {members.map((member, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col w-40 gap-2 pb-2 text-center bg-white rounded-md shadow-md cursor-pointer our-team-card h-60 md:w-52 md:h-72 xl:w-60 xl:h-80"
            >
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-40 md:h-52 xl:h-60 rounded-t-md"
              />
              <div className="flex flex-col justify-between h-full">
                <h3 className="font-semibold text-slate-600 ">{member.name}</h3>
                <h4 className="text-sm font-semibold xl:text-base">
                  {member.designation}
                </h4>
              </div>
              <div className="absolute left-0 items-center justify-center hidden w-full h-full bg-red-500 rounded-md opacity-0 our-team-card-hover top-80 smooth">
                <div>
                  <p className="mb-8 text-lg font-bold text-white">{member.name}</p>
                  <p className="text-sm font-semibold text-white xl:text-base">
                    {member.designation}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
