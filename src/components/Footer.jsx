import React from "react";
import "../css/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Footer() {
  return (
    <div id="footer">

      <div class="flex flex-wrap rows items-start justify-center gap-4">
        
        <div class="w-[300px]">
          <img
            src="./Endless Raven Logo.png"
            alt="logo"
            class="w-[80%] object-cover mb-2"
          />
          <div class="text-justify text-sm">
            Welcome to Endless Raven, where innovation knows no bounds. As a
            leading IT company, we're dedicated to pushing the limits of
            technology to empower businesses for success. From transformative
            software solutions to cutting-edge IT services, our team of experts
            is committed to guiding you towards endless possibilities in the
            digital realm.
          </div>
        </div>

        <div class="w-[300px]">
          <div class="useful-link">
            <h2>Useful Links</h2>
            <img
              src="./assets/images/about/home_line.png"
              alt=""
              class="img-fluid"
            />
            <div class="use-links">
              <li>
                <a href="#">
                  <MdOutlineKeyboardDoubleArrowRight />
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <MdOutlineKeyboardDoubleArrowRight />
                  About Us
                </a>
              </li>
              <li>
                <a href="#">
                  <MdOutlineKeyboardDoubleArrowRight />
                  Gallery
                </a>
              </li>
              <li>
                <a href="#">
                  <MdOutlineKeyboardDoubleArrowRight />
                  Contact
                </a>
              </li>
            </div>
          </div>
        </div>

        <div class="w-[300px]">
          <div class="social-links">
            <h2>Follow Us</h2>
            <div class="social-icons">
              <li>
                <a href="#">
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn /> Linkedin
                </a>
              </li>
            </div>
          </div>
        </div>

        <div class="w-[300px]">
          <div class="address">
            <h2>Address</h2>
            <div class="address-links">
              <li class="address1 flex items-center gap-3">
                <FaRegAddressCard /> 
                123 Main Street, City, State Zipcode
              </li>
              <li className="flex items-center gap-3">
                <FaPhone />
                +94 773730768
              </li>
              <li className="flex items-center gap-3">
                  <MdOutlineEmail />
                  endlessravenonline@gmail.com
              </li>
            </div>
          </div>
        </div>

      </div>
      <div class="copy-right-sec">
        <i class="fa-solid fa-copyright"></i> 2024 Powerd By
        <a href="#">Endless Raven</a>
      </div>
      
    </div>
  );
}
