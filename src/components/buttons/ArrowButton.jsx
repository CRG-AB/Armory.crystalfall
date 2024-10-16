import arrowNormal from "../../img/buttons/arrows/arrow-btn-default-up.webp";
import arrowHover from "../../img/buttons/arrows/arrow-btn-hover-up.webp";
import { useState } from "react";

{
  /* <SidebarOpenCloseButton
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          /> */
}

export const ArrowButton = ({ direction, onClick, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        backgroundImage: `url(${isHovered ? arrowHover : arrowNormal})`,
        transition: "background-image 0.3s ease-in-out",
        transform: `rotate(${
          direction === "right"
            ? 90
            : direction === "left"
            ? 270
            : direction === "down"
            ? 180
            : direction === "up"
            ? 0
            : 0
        }deg)`,
        filter: `${disabled ? "grayscale(60%)" : ""}`,
      }}
      disabled={disabled}
      className="h-10 w-10 bg-contain bg-no-repeat cursor-pointer z-10"
    ></button>
  );
};
