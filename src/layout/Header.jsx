import { NavLink } from "react-router-dom";

import headerBar from "../img/ui/header-bar.svg";
import CrystalFall from "../img/crg/CrystalFall.svg";
import testnet from "../img/ui/Testnet.svg";

// Import social media icons (assuming you have these SVGs)
import discordIcon from "../img/crg/socials/discord.svg";
import youtubeIcon from "../img/crg/socials/youtube.svg";
import twitterIcon from "../img/crg/socials/x.svg";
import facebookIcon from "../img/crg/socials/facebook.svg";

export const Header = () => {
  return (
    <header
      className="desktop absolute header top-0 left-0 bg-cover bg-center w-full h-20 flex items-center justify-between pl-20 pt-2 pr-4 z-50"
      style={{ backgroundImage: `url(${headerBar})` }}
    >
      <div className="flex items-center">
        <NavLink className="menu-item" to="/">
          Home
        </NavLink>
        <NavLink className="menu-item" to="/browse">
          Browse
        </NavLink>
        <NavLink className="menu-item" to="/profile">
          Profile
        </NavLink>
        <NavLink className="menu-item" to="/about">
          About
        </NavLink>
      </div>

      <NavLink
        to="/"
        className="absolute left-1/2 -ml-[120px] -mt-2 flex items-center"
      >
        <img src={CrystalFall} alt="CrystalFall" className="h-16" />
        <p className="">
          <img
            src={testnet}
            alt="Testnet"
            className="absolute left-36 top-14 h-3"
          />
        </p>
      </NavLink>
      <div className="flex items-center space-x-4 -mt-2">
        <a
          href="https://discord.com/invite/ntPmauYuKV"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-page p-2"
        >
          <img src={discordIcon} alt="Discord" className="h-5 w-5" />
        </a>
        <a
          href="https://www.youtube.com/@playcrystalfall"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-page p-2"
        >
          <img src={youtubeIcon} alt="YouTube" className="h-5 w-5" />
        </a>
        <a
          href="https://x.com/playcrystalfall"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-page p-2"
        >
          <img src={twitterIcon} alt="Twitter" className="h-5 w-5" />
        </a>
        <a
          href="https://www.facebook.com/playcrystalfall"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-page p-2"
        >
          <img src={facebookIcon} alt="Facebook" className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
};
