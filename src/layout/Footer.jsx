import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import CSS for Slick
import "slick-carousel/slick/slick-theme.css"; // Import theme CSS for Slick

import atka from "../img/crg/partners/atka-logo.png";
import pwc from "../img/crg/partners/pwc-logo.png";
import worldline from "../img/crg/partners/worldline-logo.png";
import mh from "../img/crg/partners/MH-Ventures-logo.png";
import snz from "../img/crg/partners/snz-logo.png";
import mc from "../img/crg/partners/mc-logo.png";
import lyrik from "../img/crg/partners/lyrik-logo.png";
import microsoft from "../img/crg/partners/microsoft-logo.png";
import coinfund from "../img/crg/partners/coinfund-logo.png";
import seven from "../img/crg/partners/7-logo.png";

import crg from "../img/crg/crg-logo.webp";
import separatorLine from "../img/ui/separator-line.svg";

export const Footer = () => {
  const partners = [
    atka,
    pwc,
    worldline,
    mh,
    snz,
    mc,
    lyrik,
    microsoft,
    coinfund,
    seven,
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5, // Show 3 logos at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 2, // Show 2 logos on smaller screens
        },
      },
      {
        breakpoint: 480, // Adjust for mobile screens
        settings: {
          slidesToShow: 1, // Show 1 logo on mobile screens
        },
      },
    ],
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="gold-gradient text-3xl text-center text-page mb-8">
          Partners
        </h2>
        <img
          src={separatorLine}
          alt="Separator Line"
          className="w-3/4 mb-8 mx-auto"
        />
        <div className="relative w-full h-24 overflow-hidden">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="">
                <div className="flex justify-center items-center">
                  <img
                    src={partner}
                    alt={`Partner ${index}`}
                    className="h-16 mx-2"
                    style={{ filter: "opacity(0.3)" }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <img
          src={separatorLine}
          alt="Separator Line"
          className="w-3/4 mb-8 mx-auto"
        />

        <div className="grid grid-cols-3">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl mb-2 gold-gradient">Disclaimer</h3>
            <p className="max-w-md">
              Crystalfall is an action RPG still in development and while we
              aspire to accurately describe the game, we cannot guarantee that
              everything you are presented with here will make it into the final
              product
            </p>
          </div>
          <div className="flex justify-center items-center mb-8">
            <img
              src={crg}
              alt="Crypto Rogue Games"
              className="h-32 opacity-70"
            />
          </div>
          <div className="text-right">
            <h3 className="text-xl mb-2 gold-gradient">Official Channels</h3>
            <p>CRG AB</p>
            <p>Company Reg nr: 559310-6023</p>
            <p>VAT nr: SE559310602301</p>
            <p>Vasagatan 6, 90329 UMEÅ, Sweden</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a
            href="https://crystalfall.com/staging/privacy-notice/"
            className="text-blue-400 hover:text-blue-300"
          >
            Privacy Policy
          </a>
          <a
            href="https://crystalfall.com/staging/crystalfall-terms-of-use/"
            className="text-blue-400 hover:text-blue-300"
          >
            Terms Of Use
          </a>
        </div>
        <div className="text-center mt-8">© 2024 All Rights Reserved.</div>
      </div>
    </footer>
  );
};
