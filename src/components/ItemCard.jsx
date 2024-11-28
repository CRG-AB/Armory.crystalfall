import React from "react";
import { styled, keyframes } from "styled-components";
import CardBackground from "../img/ui/Card2.svg";
import horisontalLine from "../img/ui/Line-fade-300.webp";
import downArrowLine from "../img/ui/downArrowLine.webp";
import upArrowLine from "../img/ui/upArrowLine.webp";
import { useNavigate } from "react-router-dom";
import { ITEMS_CONTRACT } from "../CONST.js";

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
  height: 1350px;
  width: 950px;
  background-image: url(${CardBackground});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 45px 50px;
  transform: scale(0.8);
  font-size: 1.15rem;
  filter: drop-shadow(0 0 20px #a3a3a336);
`;

const StyledImageDiv = styled.div`
  padding-top: 70px;
  position: relative;
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
  margin: 10px 10px;
  padding: 12px 15px 0px 15px;
  color: #dcc097;
  position: relative;
  background: linear-gradient(360deg, #5b412e 0%, rgba(51, 46, 41, 0) 100%);

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #b19670;
  }

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

const processMetadata = (semanticToken) => {
  // Common fields across all item types
  const commonFields = [
    "season",
    "originallyMinted",
    "itemLooted",
    "category",
    "subCategory",
    "itemClass",
    "itemSubClass",
    "baseItem",
    "family",
    "level",
    "rarity",
    "quality",
  ];

  // Equipment specific fields
  const equipmentFields = [
    "defense",
    "maxDurability",
    "levelRequirement",
    "classRequirement",
    "attributeRequirements",
    "theme",
    "attackSpeed",
    "range",
  ];

  // Process common fields
  const baseMetadata = commonFields.map((field) => ({
    trait_type: field,
    value: semanticToken.find((trait) => trait.trait_type === field)?.value,
  }));

  // Process equipment fields
  const equipmentMetadata = equipmentFields.map((field) => ({
    trait_type: field,
    value: processEquipmentField(
      semanticToken.find((trait) => trait.trait_type === field)?.value
    ),
  }));

  // Process damage fields if they exist
  const damageMetadata = processDamageFields(semanticToken);

  return [...baseMetadata, ...equipmentMetadata, ...damageMetadata].filter(
    (field) => isValidValue(field.value)
  );
};

const processEquipmentField = (value) => {
  if (!value || value === "") return null;
  return value;
};

const processDamageFields = (semanticToken) => {
  const damageTypes = ["physical", "lightning", "fire", "cold", "aether"];
  return damageTypes
    .map((type) => {
      const min = semanticToken.find(
        (trait) => trait.trait_type === `${type}DamageMin`
      )?.value;
      const max = semanticToken.find(
        (trait) => trait.trait_type === `${type}DamageMax`
      )?.value;

      if (!min || !max) return null;

      return {
        trait_type: `${type}Damage`,
        value: `${min}-${max}`,
      };
    })
    .filter((damage) => damage !== null);
};

const isValidValue = (value) => {
  if (value === null || value === undefined) return false;
  if (value === "") return false;
  if (Array.isArray(value) && value.length === 0) return false;
  return true;
};

// Add this new helper function
const formatTraitType = (text) => {
  // Convert camelCase to space-separated words and capitalize first letter
  return (
    text
      // Add space between camelCase words
      .replace(/([A-Z])/g, " $1")
      // Capitalize first letter
      .replace(/^./, (str) => str.toUpperCase())
      // Trim any extra spaces
      .trim()
  );
};

const modTypes = [
  { type: "aetherealMods", color: "blue" },
  { type: "implicitMods", color: "blue" },
  { type: "rareMods", color: "blue" },
  { type: "socketMods", color: "blue" },
  { type: "uncommonMods", color: "blue" },
];

export const ItemCard = ({ token }) => {
  console.log(token);
  const navigate = useNavigate();

  let displayedTraitsUpper = [];
  let displayedTraitsLower = [];
  let aetherialMods = [];
  let implicitMods = [];
  let rareMods = [];
  let socketMods = [];
  let uncommonMods = [];
  let requirements = [];
  let affixes = {};

  if (token.metadata && token.metadata.properties) {
    const semanticToken = Object.entries(token.metadata.properties)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([trait_type, value]) => ({ trait_type, value }));

    const metadata = processMetadata(semanticToken);

    const traits = metadata.filter(
      (trait) =>
        trait.trait_type !== "Damage" &&
        ![
          "implicitMods",
          "aetherealMods",
          "uncommonMods",
          "rareMods",
          "socketMods",
        ].includes(trait.trait_type) &&
        trait.trait_type !== "attributeRequirements" &&
        trait.trait_type !== "levelRequirement" &&
        trait.trait_type !== "classRequirement"
    );

    if (traits.length > 7) {
      displayedTraitsUpper = traits.slice(0, 7);
      displayedTraitsLower = traits.slice(7);
    } else {
      displayedTraitsUpper = traits;
    }

    affixes = modTypes.reduce((acc, { type }) => {
      acc[type] =
        semanticToken
          .find((trait) => trait.trait_type === type)
          ?.value.split(",")
          .filter((mod) => mod && mod.trim() !== "") || [];
      return acc;
    }, {});

    aetherialMods = affixes.aetherealMods;
    implicitMods = affixes.implicitMods;
    rareMods = affixes.rareMods;
    socketMods = affixes.socketMods;
    uncommonMods = affixes.uncommonMods;

    requirements = semanticToken
      .filter(
        (trait) =>
          (trait.trait_type.includes("classRequirement") ||
            trait.trait_type.includes("levelRequirement") ||
            trait.trait_type.includes("attributeRequirements")) &&
          trait.value !== undefined &&
          trait.value !== null &&
          trait.value !== "" &&
          trait.value !== 0
      )
      .map((trait) => {
        if (trait.trait_type.includes("levelRequirement"))
          return { ...trait, value: `Level ${trait.value}` };
        if (trait.trait_type.includes("attributeRequirements")) {
          // Parse the attribute requirements
          const attrs = trait.value.split(",").map((attr) => {
            const [name, value] = attr.trim().split(" ");
            return { name, value: parseInt(value) };
          });

          // Filter out attributes with value 0 and format them
          const validAttrs = attrs
            .filter((attr) => attr.value > 0)
            .map((attr) => `${attr.name} ${attr.value}`);

          return { ...trait, value: validAttrs.join(", ") };
        }
        return trait;
      })
      .filter((trait) => trait.value && trait.value !== ""); // Remove empty requirements
  }
  return (
    <StyledCard>
      <h1 className="text-5xl break-words text-center">
        {token.metadata.name}
      </h1>

      <StyledImageDiv>
        <div
          className="absolute -left-4 -top-16 h-12 w-20 font-extrabold text-4xl cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          ←
        </div>
        <div className="relative flex flex-col justify-between w-[450px]">
          <div>
            <img src={horisontalLine} className="w-full h-1 my-2" />
            <h3 className="mt-2">
              <b>Requirements: </b>
              {requirements.map((trait, i) => (
                <span key={i}>
                  {trait.value}
                  {i < requirements.length - 1 ? ", " : ""}
                </span>
              ))}
            </h3>
            <div className="mt-6">
              {modTypes.map(({ type, color }) => {
                const affixArray = affixes[type];
                return (
                  affixArray?.length > 0 && (
                    <React.Fragment key={type}>
                      <p className="text-gold text-xs -mb-1">
                        {type.replace("Mods", " AFFIXES:").toUpperCase()}
                      </p>
                      {affixArray.map(
                        (affix, i) =>
                          affix && (
                            <p key={i} className={`text-${color}-400 -mb-2`}>
                              {affix}
                            </p>
                          )
                      )}
                      <img src={horisontalLine} alt="" className="my-2" />
                    </React.Fragment>
                  )
                );
              })}
            </div>
          </div>
        </div>
        <StyledImage src={token.metadata.image} />
        <div
          className="bg-[url('/src/img/buttons/sphere.webp')] bg-cover h-16 w-40 absolute top-[400px] right-2 cursor-pointer border-2 hover:border-4 transition-all rounded-md bg-center"
          onClick={() =>
            window.open(
              `https://testnet.sphere.market/beam-testnet/nft/${ITEMS_CONTRACT}/${token.metadata.id}`
            )
          }
        ></div>
      </StyledImageDiv>
      <img src={upArrowLine} className="w-full h-10 mb-2" />
      <div className="bg-[url('/src/img/ui/vitalsBg.webp')] bg-cover h-62 pt-4">
        {displayedTraitsUpper.map((trait, i) => {
          return (
            <Vitals key={i}>
              {formatTraitType(trait.trait_type)}: {trait.value}
            </Vitals>
          );
        })}
      </div>
      <StyledMetadata>
        {displayedTraitsLower
          .filter(
            (trait) =>
              trait.value && trait.value !== "Undefined" && trait.value !== 0
          )
          .map((trait, i) => (
            <TraitBox key={i}>
              {formatTraitType(trait.trait_type)}: {trait.value}
            </TraitBox>
          ))}
      </StyledMetadata>
      <img src={downArrowLine} className="w-full h-10" />
      <p className="text-red-700 text-center absolute bottom-14 left-1/2 -translate-x-1/2">
        All NFTs exist solely on the Testnet and have no real value
      </p>
    </StyledCard>
  );
};
