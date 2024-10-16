import expandable from "../../img/buttons/arrows/expandable.webp";
import expanded from "../../img/buttons/arrows/expanded.webp";
import { useState } from "react";

{
  /* <SidebarOpenCloseButton
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          /> */
}

export const Expandable = ({ isSidebarOpen, setIsSidebarOpen, className }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (isSidebarOpen !== undefined || setIsSidebarOpen !== undefined) {
          setIsSidebarOpen(!isSidebarOpen);
        }
      }}
      className={`absolute cursor-pointer left-0 z-10 saturate-150 contrast-115 brightness-105 ${className} ${
        isSidebarOpen ? "ml-24" : ""
      }`}
    >
      <img src={isSidebarOpen ? expanded : expandable} className="h-10" />
    </button>
  );
};
