import expandable from "../../img/buttons/arrows/expandable.webp";
import expanded from "../../img/buttons/arrows/expanded.webp";
import { useState, useEffect } from "react";

export const Expandable = ({ isSidebarOpen, setIsSidebarOpen, className }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update width on resize
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      // Open sidebar if switching to desktop (>640px for sm breakpoint)
      // Close sidebar if switching to mobile
      if (newWidth > 640 && !isSidebarOpen) {
        setIsSidebarOpen(true);
      } else if (newWidth <= 640 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen, setIsSidebarOpen, setWindowWidth]);

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
      <img src={isSidebarOpen ? expanded : expandable} className="h-10" alt="Toggle sidebar" />
    </button>
  );
};
