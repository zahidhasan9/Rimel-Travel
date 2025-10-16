import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-16 px-8 md:px-36 text-gray-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Branding */}
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-[#41A4FF]">Travely</h3>
          <p className="text-gray-400">
            Explore Bangladesh effortlessly with Travely. Book hotels, tours,
            vehicles, and enjoy a seamless travel experience.
          </p>
          <div className="flex gap-6 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-[#41A4FF] transition duration-300"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#41A4FF] transition duration-300"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#41A4FF] transition duration-300"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#41A4FF] transition duration-300"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Reservations Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold text-[#41A4FF]">Reservations</h4>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/hotelhome"> Hotels</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              
              <Link to="/tours/home"> Tour Packages</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              
              <Link to="/vehicles"> Vehicles</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              
              <Link to="/TrainHome"> Train</Link>
            </li>
            {/* <li className="hover:text-white transition duration-300 cursor-pointer">
              Events
            </li> */}
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-semibold text-[#41A4FF]">Support</h4>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li className="hover:text-white transition duration-300 cursor-pointer">
             <Link to="/contactus"> Contact Us</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/aboutus"> About Us</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              <Link to="/faq"> FAQ</Link>
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
             
               <Link to="/policy">  Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Trip Vibe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
