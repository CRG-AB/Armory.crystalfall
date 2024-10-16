import React, { useState, useEffect, useRef } from "react";

{
  /* <MouseFollower imgSrc={eyeGuard} /> */
}

export const MouseFollower = ({ imgSrc, height, width, isActive }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  const updateMousePosition = (event) => {
    if (event.pageY < 150) return;
    setMousePosition({
      x: event.pageX - width / 2,
      y: event.pageY - height / 2 - 150,
    });
  };

  const move = () => {
    const springConstant = 0.01; // Lower value makes the image follow the mouse more closely
    const dampingFactor = 0.9; // Higher value makes the movement slower and smoother
    const stopThreshold = 0.1; // Lower value makes the image stop faster

    const acceleration = {
      x: (mousePosition.x - position.current.x) * springConstant,
      y: (mousePosition.y - position.current.y) * springConstant,
    };

    velocity.current = {
      x: velocity.current.x * dampingFactor + acceleration.x,
      y: velocity.current.y * dampingFactor + acceleration.y,
    };

    position.current = {
      x: position.current.x + velocity.current.x,
      y: position.current.y + velocity.current.y,
    };

    requestAnimationFrame(move);
  };

  useEffect(() => {
    move();

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mousePosition]);

  return (
    <img
      src={imgSrc}
      alt="follower"
      style={{
        position: "absolute",
        left: `${position.current.x}px`,
        top: `${position.current.y}px`,
        pointerEvents: "none",
        height: `${height}px`,
        width: `${width}px`,
        scale: `${isActive ? 0.1 : 1}`,
        zIndex: 100,
        transition: `${isActive ? "1s" : ""}`,
      }}
    />
  );
};
