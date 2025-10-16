import React, { useState, useContext, Fragment } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AuthContext } from "../../context/authContext";

const inside_nav = [
  { path: "/hotelhome", display: "Hotels" },
  { path: "/tours/home", display: "Tour Packages" },
  { path: "/vehicles", display: "Vehicles" },
  // { path: "/Restaurants", display: "Restaurants" },
  // { path: "/events", display: "Events" },
  { path: "/TrainHome", display: "Trains" },
];

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-36">
        <div className="flex justify-between items-center py-4">
          {/* Branding */}
          <Link to="/" className="text-3xl font-bold text-[#41A4FF]">
            Trip Vibe
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-[#41A4FF] transition">
              Home
            </Link>

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center gap-1 hover:text-[#41A4FF] transition font-medium">
                Reservations <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    {inside_nav.map((item, idx) => (
                      <Menu.Item key={idx}>
                        {({ active }) => (
                          <Link
                            to={item.path}
                            className={classNames(
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {item.display}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            
            <Link to="/aboutus" className="hover:text-[#41A4FF] transition">
              About us
            </Link>
            <Link to="/contactus" className="hover:text-[#41A4FF] transition">
              Contact us
            </Link>
            <Link to="/blog" className="hover:text-[#41A4FF] transition">
              Blog
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-[#41A4FF]">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={user.img || "/default-user.png"}
                    alt={user.name}
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                      <h2 className="block px-4 py-2 text-sm text-[#41A4FF] font-medium">
                        {user.name}
                      </h2>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={classNames(
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={classNames(
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-[#41A4FF] text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-600 transition"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={() => setNav(!nav)}>
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-2xl font-bold text-[#41A4FF]">Travely</h1>
        </div>
        <ul className="flex flex-col mt-6">
          <li className="border-b p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b p-4">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center justify-between w-full">
                Reservations
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    {inside_nav.map((item, idx) => (
                      <Menu.Item key={idx}>
                        {({ active }) => (
                          <Link
                            to={item.path}
                            className={classNames(
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {item.display}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="border-b p-4">
            <Link to="/contactus">Contact us</Link>
          </li>
          {user ? (
            <li className="border-b p-4">
              <Link to="/profile">Profile</Link>
              <button
                onClick={handleLogout}
                className="mt-2 w-full text-left text-sm text-gray-700 hover:text-gray-900"
              >
                Sign out
              </button>
            </li>
          ) : (
            <li className="p-4 flex flex-col gap-2">
              <Link
                to="/login"
                className="px-4 py-2 bg-[#41A4FF] text-white font-semibold rounded-md text-center hover:bg-blue-600 transition"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md text-center hover:bg-gray-600 transition"
              >
                Sign up
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
