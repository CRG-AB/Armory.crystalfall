import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { X } from "lucide-react";
import CrystalFall from "../img/crg/CrystalFall.svg";

import discordIcon from "../img/crg/socials/discord.svg";
import youtubeIcon from "../img/crg/socials/youtube.svg";
import twitterIcon from "../img/crg/socials/x.svg";
import facebookIcon from "../img/crg/socials/facebook.svg";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 mobile-header bg-black text-white p-4 flex justify-between items-center w-full z-50">
      {isMenuOpen && (
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-80" : "opacity-0"
          } z-40`}
        ></div>
      )}
      <div className="flex items-center">
        <a href="https://crystalfall.com">
          <img src={CrystalFall} alt="Crystalfall Logo" className="h-12" />
        </a>
      </div>
      <button onClick={toggleMenu} className="z-50 focus:outline-none">
        {isMenuOpen ? (
          <X className="w-6 h-6 text-gray-400" />
        ) : (
          <svg
            className="w-6 h-6"
            fill="#AE9877"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#121010] text-white p-8 transform ${
          isMenuOpen ? "translate-x-0 shadow-lg" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 border-l-[1px] border-page`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 18L18 6M6 6l12 12"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex items-center mb-8">
          <img src={CrystalFall} alt="Crystalfall Logo" className="h-12" />
        </div>
        <div className="flex flex-col space-y-4">
          <NavLink to="/" className="menu-item" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/browse" className="menu-item" onClick={toggleMenu}>
            Browse
          </NavLink>
          <NavLink to="/profile" className="menu-item" onClick={toggleMenu}>
            Profile
          </NavLink>
          <NavLink to="/about" className="menu-item" onClick={toggleMenu}>
            About
          </NavLink>
        </div>
        <div className="flex space-x-4 mt-8 text-gray-300 w-full justify-center">
          <a href="https://discord.com/invite/ntPmauYuKV">
            <img src={discordIcon} alt="Discord" className="h-5 w-5" />
          </a>
          <a href="https://www.youtube.com/@playcrystalfall">
            <img src={youtubeIcon} alt="YouTube" className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/playcrystalfall">
            <img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
          </a>
          <a href="https://www.x.com/playcrystalfall">
            <img src={twitterIcon} alt="Twitter" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};
