import { styled, keyframes } from "styled-components";

import CardBackground from "../img/ui/big-text-box.webp";
import horisontalLine from "../img/ui/Line-fade-300.webp";
import downArrowLine from "../img/ui/downArrowLine.webp";
import upArrowLine from "../img/ui/upArrowLine.webp";
import { useNavigate } from "react-router-dom";
import { ITEMS_CONTRACT } from "../CONST";

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
  filter: drop-shadow(0 0 20px #a3a3a336);
`;

const StyledImageDiv = styled.div`
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

export const ItemCard = ({ token }) => {
  console.log(token);
  const newArray = (oldArray, ...indices) => {
    return indices.map((index) => oldArray[index]);
  };
  const navigate = useNavigate();

  const semanticKeyes = [
    "Aethereal Mods", //0
    "Attack Speed", //1
    "Attribute Requirements", //2
    "Base Item", //3
    "Category", //4
    "Class Requirement", //5
    "Damage Max", //6
    "Damage Min", // 7
    "Damage Type", //8
    "Defense", //9
    "Family", //10
    "Implicit Mods", //11
    "Item Class", //12
    "Item Looted", //13
    "Item Sub Class", //14
    "Level", //15
    "Level Requirement", //16
    "Max Charges", //17
    "Max Durability", //18
    "Originally Minted", //19
    "Quality", //20
    "Range", //21
    "Rare Mods", //22
    "Rarity", //23
    "Season", //24
    "Socket Mods", //25
    "Sub Category", //26
    "Theme", //27
    "Uncommon Mods", //28
  ];

  const semanticToken = Object.entries(token.metadata.properties)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((trait, i) => {
      let newTrait = {};
      newTrait.trait_type = `${semanticKeyes[i]}`;
      newTrait.value = `${trait[1]}`;
      return newTrait;
    });

  let damageRange;
  if (semanticToken[7].value == "0" || semanticToken[6].value == "0") {
    damageRange = [
      {
        trait_type: "Damage Range",
        value: `Undefined`,
      },
    ];
  } else {
    damageRange = [
      {
        trait_type: "Damage Range",
        value: `${semanticToken[7].value} - ${semanticToken[6].value}`,
      },
    ];
  }
  const vitals = damageRange.concat(
    newArray(semanticToken, 21, 20, 9, 8, 1, 18)
  );
  const traits = newArray(semanticToken, 3, 4, 10, 12, 13, 14, 15, 23, 26);
  const allTraits = vitals.concat(traits);
  const filteredTraits = allTraits.filter(
    (trait) =>
      trait.value != "Undefined" &&
      trait.value != 0 &&
      trait.value != "" &&
      trait.value != null &&
      trait.value != undefined &&
      trait.value != "0"
  );
  const displayedTraitsUpper = filteredTraits.slice(0, 7);
  const displayedTraitsLower = filteredTraits.slice(7, filteredTraits.length);

  const aetherialMods = semanticToken[0].value.split(",");

  const implicitMods = semanticToken[11].value.split(",");

  const rareMods = semanticToken[22].value.split(",");

  const socketMods = semanticToken[25].value.split(",");

  const uncommonMods = semanticToken[28].value.split(",");

  const requirements = semanticToken
    .filter(
      (trait) =>
        trait.trait_type.includes("Requirement") &&
        !trait.trait_type.includes("Attribute")
    )
    .map((trait) => {
      if (trait.trait_type.includes("Class")) {
        return { ...trait, value: `Class: ${trait.value}, ` };
      }
      if (trait.trait_type.includes("Level")) {
        return { ...trait, value: `Level: ${trait.value}` };
      }
      return trait;
    });

  return (
    <StyledCard>
      <p className="text-red-700 text-center mb-2">
        All NFTs exist solely on the Testnet and have no real value.
      </p>
      <StyledImageDiv>
        <div
          className="absolute left-2 -top-9 h-12 w-20 font-extrabold text-4xl cursor-pointer"
          onClick={() => {
            navigate(-1);
          }}
        >
          ←
        </div>
        <div className="relative flex flex-col justify-between w-[450px]">
          <div>
            <h1 className="text-5xl mt-4 break-words w-96">
              {token.metadata.name}
            </h1>
            <img src={horisontalLine} className="w-full h-1 my-2" />
            <h3 className="mt-2">
              <b>Requirements: </b>
              {requirements.map((trait, i) => {
                if (
                  !trait.value ||
                  trait.value == 0 ||
                  trait.value == "Class: , "
                )
                  return;
                return <span key={i}>{trait.value}</span>;
              })}
            </h3>
            <div className="mt-6">
              Mods:
              {aetherialMods != ""
                ? aetherialMods.map((mod, i) => {
                    return <p key={i}>{mod}</p>;
                  })
                : null}
              {implicitMods != "" ? (
                <>
                  {implicitMods.map((mod, i) => {
                    return <p key={i}>{mod}</p>;
                  })}
                  <img src={horisontalLine} alt="" />
                </>
              ) : null}
              {rareMods != "" ? (
                <>
                  {rareMods.map((mod, i) => {
                    return <p key={i}>{mod}</p>;
                  })}
                  <img src={horisontalLine} alt="" />
                </>
              ) : null}
              {socketMods != "" ? (
                <>
                  {socketMods.map((mod, i) => {
                    return <p key={i}>{mod}</p>;
                  })}
                  <img src={horisontalLine} alt="" />
                </>
              ) : null}
              {uncommonMods != "" ? (
                <>
                  {uncommonMods.map((mod, i) => {
                    return <p key={i}>{mod}</p>;
                  })}
                  <img src={horisontalLine} alt="" />
                </>
              ) : null}
            </div>
          </div>
        </div>
        <StyledImage src={token.metadata.image} />
        <div
          className="bg-[url('/src/img/buttons/sphere.webp')] bg-cover h-16 w-40 absolute top-[329px] right-2 cursor-pointer border-2 hover:border-4 transition-all rounded-md bg-center"
          onClick={() =>
            window.open(
              `https://testnet.sphere.market/beam-testnet/nft/${ITEMS_CONTRACT}/${token.metadata.id}`
            )
          }
        ></div>
      </StyledImageDiv>
      <img src={upArrowLine} className="w-full h-10 my-2" />
      <div className="bg-[url('/src/img/ui/vitalsBg.webp')] bg-cover h-62 pt-4">
        {displayedTraitsUpper.map((trait, i) => {
          return (
            <Vitals key={i}>
              {trait.trait_type}: {trait.value}
            </Vitals>
          );
        })}
      </div>
      <StyledMetadata>
        {displayedTraitsLower.map((trait, i) => {
          if (trait.value == "Undefined") return;
          return (
            <TraitBox key={i}>
              {trait.trait_type}: {trait.value}
            </TraitBox>
          );
        })}
      </StyledMetadata>
      <img src={downArrowLine} className="w-full h-10" />
    </StyledCard>
  );
};
