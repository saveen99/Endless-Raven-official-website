














import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Description from "../components/Description";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import OurTeam from "../components/OurTeam";
import Technologies from "../components/Technologies";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/home.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const whatsapp = () => {
    const phoneNumber = "+94761522239";
    const message = encodeURIComponent(
      "Could you please provide me with more insights into the workings of the your team?"
    );
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div data-aos="fade">
        <HeroSection />
      </div>
      <div className="bg pt-36">

        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>{/* --- */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>{/* --- */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>{/* --- */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>{/* --- */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <div data-aos="fade-up">
          <Description />
        </div>
        <div data-aos="fade-up">
          <Services />
        </div>
        <div data-aos="fade-up">
          <Technologies />
        </div>
        <div data-aos="fade-up">
          <Testimonials />
        </div>
        <div data-aos="fade-up">
          <Portfolio />
        </div>
        <div data-aos="fade-up">
          <Contact />
        </div>
        <div data-aos="fade-up">
          <OurTeam />
        </div>
      </div>
      <a href="#" onClick={whatsapp}>
        <img
          src="./whatsapp.png"
          alt="whatsapp"
          className="fixed object-cover w-10 h-10 cursor-pointer bottom-8 right-8 hover:scale-110 smooth anim"
        />
      </a>
    </div>
  );
}
