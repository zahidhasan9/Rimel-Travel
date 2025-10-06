import React from "react";

import HeroTour from "./HeroTour";
import HiddenPlaces from "./HiddenPlaces";
import { motion } from "framer-motion";

import ServiceCard from "./Services/ServiceCard";
import TourCategories from "./Services/ServiceCategories";
import TourNav from "../../components/navbar/TourNav";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import CustomForm from "./Services/CustomForm";

import welcome from "../../assets/Tour/Tour-Welcome.jpg";

const Home = () => {
  return (
    <div>
      <HeroTour />

      {/* Navigated menu start*/}
         <nav className="w-full bg-gradient-to-r from-green-100 via-blue-50 to-teal-100 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <ol className="flex flex-wrap items-center text-gray-700 text-lg">
          <li>
            <Link
              to="/"
              className="text-green-700 font-semibold hover:text-green-900 transition-all duration-200"
            >
              🏠 Home
            </Link>
          </li>

          <li>
            <AiOutlineRight className="mx-2 text-gray-400" />
          </li>

          <li>
            <Link
              to="/tours"
              className="text-blue-600 font-semibold hover:text-blue-800 transition-all duration-200"
            >
              Tour Packages
            </Link>
          </li>

          <li>
            <AiOutlineRight className="mx-2 text-gray-400" />
          </li>

          <li className="text-gray-500 font-semibold">
            Explore Bangladesh
          </li>
        </ol>
      </div>
    </nav>
      {/* Navigated menu end*/}

      {/* Navigation Tour bar */}
      <TourNav />

      {/* Categories */}
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Animated Welcome Section */}
      <section className="relative mt-10 overflow-hidden rounded-3xl shadow-lg bg-gradient-to-r from-green-50 via-blue-50 to-teal-50">
        <div className="grid lg:grid-cols-2 items-center gap-8">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="p-10"
          >
            <h1 className="text-5xl font-extrabold text-green-800 leading-tight">
              Welcome to <span className="text-blue-600">Bangladesh</span> 🇧🇩
            </h1>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Discover the land of rivers, culture, and natural beauty — from the
              serene tea gardens of Sylhet to the golden sands of Cox’s Bazar,
              and the majestic Sundarbans mangrove forest. Start your journey
              with us today!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-800 transition-all duration-300"
            >
              Explore Now
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <img
              src={welcome}
              alt="Welcome to Bangladesh"
              className="rounded-l-3xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Tour Categories */}
      <h1 className="text-4xl mt-16 mb-10 ml-2 font-bold text-gray-800">
        Tour Categories
      </h1>
      <TourCategories />
    </div>
      {/* Service Card Brief start */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl mb-10 ml-2">Perfect Picks For You</h1>
        <ServiceCard />
        {/* <div className="flex justify-center items-center">
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="mt-20 inline-block rounded-xl bg-primary px-6 pb-2 pt-2.5 text-3xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            <Link to={"/tourdetails"}></Link>
            View More
          </button>
        </div> */}
      </div>
      {/* Service Card Brief end*/}

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
        <h1 className="text-black uppercase text-center pt-0 mt-0 text-5xl">
          don't fit All these Packages to <br /> your unique interests and{" "}
          <br /> preferences?
        </h1>
      </div>

      {/* customer form */}
      <div>
        <CustomForm />
      </div>
      <div>
        <HiddenPlaces />
      </div>
    </div>
  );
};

export default Home;
