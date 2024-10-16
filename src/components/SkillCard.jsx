import { styled, keyframes } from "styled-components";

import Tokens from "../Tokens/TokenData.json";

import CardBackground from "../img/ui/big-text-box.webp";
import horisontalLine from "../img/ui/Line-fade-300.webp";
import downArrowLine from "../img/ui/downArrowLine.webp";
import upArrowLine from "../img/ui/upArrowLine.webp";
import { ipfsLink, traitTypes } from "../CONST";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";

const customAnimation = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
  }
`;

const StyledCard = styled.div`
  height: 1200px;
  width: 950px;
  background-image: url(${CardBackground});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 80px 50px;
  transform: scale(0.8);
  font-size: 1.15rem;
`;

const StyledImageDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  height: 400px;
  transition: 0.3s ease;
  &:hover {
    filter: brightness(1.1) contrast(1.1);
  }
`;

const StyledMetadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: center;
  margin: 10px 0;
`;

const TraitBox = styled.div`
  height: 45px;
  margin: 10px 20px;
  background-color: #e6e6e6;
  padding: 0.5rem;
  border-radius: 10px;
  border: 3px solid #694e43;
  color: black;
  background: #e6e6e6;
  background: repeating-radial-gradient(
    ellipse farthest-corner at center center,
    #e6e6e6 0%,
    #694e43 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    animation: ${customAnimation} 1s ease-in-out;
  }
`;
const Vitals = styled.div`
  font-size: 1.2rem;
  height: 30px;
  margin: 3px;
  background-color: #e6e6e6;
  padding: 0;
  border-bottom: 2px solid #77716e;
  padding-left: 20px;
  color: black;
  background: #e6e6e6;
  background: repeating-radial-gradient(
    ellipse farthest-corner at center center,
    #e6e6e6 0%,
    #694e43 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SkillCard = ({ token, dynamicTraits }) => {
  const vitals = dynamicTraits.filter((trait) => {
    return !trait.trait_type.includes("Mod");
  });
  const traits = token.metadata.attributes.filter((trait) => {
    return !(
      trait.trait_type.includes("Mod") ||
      trait.trait_type.includes("requirements")
    );
  });
  const dynamicMods = dynamicTraits.filter((trait) => {
    return trait.trait_type.includes("Mod");
  });
  const implicitMods = token.metadata.attributes.filter((trait) => {
    return trait.trait_type.includes("Implicit Mod");
  });
  const allMods = implicitMods.concat(dynamicMods).map((trait) => {
    if (trait.trait_type.includes("Implicit")) {
      return `\u2666 ${trait.value}`;
    }
    return trait.value;
  });
  const requirements = token.metadata.attributes
    .filter((trait) => trait.trait_type.includes("requirements"))
    .map((trait) => {
      if (trait.trait_type.includes("Class")) {
        return { ...trait, value: `Class-${trait.value}, ` };
      }
      if (trait.trait_type.includes("Level")) {
        return { ...trait, value: `Level-${trait.value}, ` };
      }
      if (trait.trait_type.includes("Attribute")) {
        let attribute = trait.value.split(",");
        return {
          ...trait,
          value: `Toughness-${attribute[0]}, Trickery-${attribute[1]}, Caliber-${attribute[2]}, Brilliance-${attribute[3]}`,
        };
      }
      return trait;
    });

  return (
    <StyledCard>
      <StyledImageDiv>
        <div className="relative flex flex-col justify-between">
          <div>
            <h1 className="text-5xl mt-4">{token.metadata.name}</h1>
            <img src={horisontalLine} className="w-full h-1 my-2" />
            <p className="text-2xl mr-2">{token.metadata.description}</p>
            <h3 className="mt-2">
              <b>Requirements: </b>
              {requirements.map((trait, i) => {
                return <span key={i}>{trait.value}</span>;
              })}
            </h3>
          </div>
          <div>
            <p className="mt-5">Implicit Mods:</p>
            {implicitMods.map((trait, i) => {
              return (
                <TraitBox className="bottom-0 w-5/6" key={i}>
                  &#9830; {trait.value}
                </TraitBox>
              );
            })}
          </div>
        </div>
        <StyledImage src={ipfsLink(token.metadata.image)} />
      </StyledImageDiv>
      <img src={upArrowLine} className="w-full h-10" />
      <div className="bg-[url('/src/img/ui/vitalsBg.webp')] bg-cover h-62 pt-4">
        {vitals.map((trait, i) => {
          return (
            <Vitals key={i}>
              {trait.trait_type}: {trait.value}
            </Vitals>
          );
        })}
      </div>
      <StyledMetadata>
        {traits.map((trait, i) => {
          return (
            <TraitBox key={i}>
              {trait.trait_type}: {trait.value}
            </TraitBox>
          );
        })}
      </StyledMetadata>
      <img src={downArrowLine} className="w-full h-10" />
      {dynamicMods.length > 0 ? (
        <Modal list={allMods} buttonText={`Show All Mods: ${allMods.length}`} />
      ) : null}
    </StyledCard>
  );
};
