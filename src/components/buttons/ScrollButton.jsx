import React from "react";

function ScrollButton({ toSection }) {
  const scrollToSection = () => {
    const section = document.getElementById(toSection);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToSection}
      className="scroll-button text-grey font-bold text-3xl hover:text-teal-400 hover:scale-110 transition duration-800 ease-in-out"
    >
      &#xFFEC;
    </button>
  );
}

export default ScrollButton;
