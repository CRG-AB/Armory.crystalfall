import { styled } from "styled-components";
import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import CardBackground from "../../img/ui/small_card.png";

const StyledP = styled.p`
  all: unset;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  padding: 5px 0px;
  margin-top: 15px;
`;

const StyledDiv = styled.div`
  height: 250px;
  width: 200px;
  flex-direction: column;
  transform-origin: center;
  background-image: url(${CardBackground});
  background-size: cover;
  padding: 30px 20px 20px;
  border-radius: 3px;
  transition: 0.5s ease;
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;

  filter: drop-shadow(0 0 6px #4747477d);
  &:hover {
    transform: scale(1.02) translateZ(0);
    color: #e7e8e8;
    cursor: pointer;
    filter: brightness(1.03) contrast(1.05) drop-shadow(0 0 10px #474747d4);
    & > .itemImage {
      transform: scale(1.05) translateZ(0);
      filter: brightness(1.1);
    }
  }
  @media screen and (max-width: 870px) {
    transform: scale(0.75) translateZ(0);
    margin: 0px;
    &:hover {
      transform: scale(0.77) translateZ(0);
      & > .itemImage {
        transform: scale(1.05) translateZ(0);
      }
    }
  }
`;

const StyledIPFS = styled.img`
  all: unset;
  height: 150px;
  width: 150px;
  position: relative;
  bottom: 0px;
  left: 0px;
  transition: 0.5s ease;
`;

export const DisplayToken = ({
  name,
  linkTo,
  img,
  className,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
}) => {
  const ref = useRef();
  const containerRef = useRef();
  useEffect(() => {
    if (ref.current && containerRef.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      containerRef.current.style.width = `${width}px`;
      containerRef.current.style.height = `${height}px`;
    }
  }, [name]);

  return (
    <StyledDiv
      className={`${className}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      <NavLink
        className="flex justify-center items-center flex-col"
        to={`/${linkTo}`}
        state={{ from: `/${window.location.hash}` }}
        onClick={() => {
          window.scrollTo({ top: 100, behavior: "smooth" });
        }}
      >
        <StyledIPFS className="itemImage" src={img} />
        <StyledP>{name}</StyledP>
      </NavLink>
    </StyledDiv>
  );
};
