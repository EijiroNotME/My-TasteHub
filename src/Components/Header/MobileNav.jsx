import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, Logo, onOpen, onClose, hideLeft }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-6 lg:px-12 bg-background text-secondary shadow-md ">
      <Link to="/">
        <img src={Logo} alt="logo" className="h-10 w-auto" />
      </Link>
      <button onClick={onOpen} className="text-secondary">
        <HiBars3BottomRight className="w-7 h-7" />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out w-full h-full fixed bg-background z-50 top-0 ${hideLeft} flex items-center justify-center`}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-secondary"
        >
          <RiCloseCircleLine className="w-7 h-7" />
        </button>

        <div className="flex flex-col items-center gap-8 p-6">
          <a href="/" className="mb-8">
            <img src={Logo} alt="logo" className="h-16 w-auto" />
          </a>

          <ul className="flex flex-col items-center gap-5">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-secondary text-2xl"
                  onClick={onClose}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-row items-center gap-4 font-medium mt-10">
            <li key="login">
              <button className="text-secondary px-4 py-2 rounded border border-secondary w-28">
                Log In
              </button>
            </li>
            <li key="sign-up">
              <button className="text-secondary px-4 py-2 rounded border border-secondary w-28">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
