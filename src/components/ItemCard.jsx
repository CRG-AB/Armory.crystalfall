import React from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { ITEMS_CONTRACT } from "../CONST";
import sphereButton from "../img/buttons/sphere.webp";

const StyledCard = styled.div`
  width: 360px;
  background: #161413;
  padding: 16px;
  color: #ffd700;
  font-size: 14px;
  margin: 0px auto 20px;
  position: relative;
  font-family: "Segoe UI", Arial, sans-serif;
  letter-spacing: 0.2px;
  outline: 1px solid #1d1a15;
  outline-offset: -1px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3), 0 0 0 2px #313029,
    0 0 0 3px #22231d, 0 0 0 4px #3d372d, 0 0 0 5px #645a4a, 0 0 0 6px #302c24,
    0 0 15px rgba(255, 255, 255, 0.15);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.02;
    pointer-events: none;
    background-image: url("https://media.freestocktextures.com/cache/68/ab/68ab077793d210ebc0f2f1b49772afcf.jpg");
    background-size: cover;
    background-position: right center;
    mix-blend-mode: color-dodge;
    filter: brightness(0.98);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    pointer-events: none;
    background: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    mix-blend-mode: multiply;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 8px;
  background: transparent;
  color: #666;
  border: none;
  padding: 4px;
  font-size: 20px;
  font-weight: 1000;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  &:hover {
    color: #4b87ff;
  }
`;

const ItemTitle = styled.div`
  font-size: 24px;
  color: ${(props) => {
    switch (props.$rarity) {
      case "Common":
        return "#d3c4ae";
      case "Uncommon":
        return "#4b87ff";
      case "Rare":
        return "#ffd700";
      case "Unique":
        return "#ff8c00";
      case "Sealed Aethereal":
        return "#00ffff";
      default:
        return "#d3c4ae";
    }
  }};
  margin-bottom: 2px;
  text-align: center;
  font-weight: 500;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const SubTitle = styled.div`
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;
const FormalSubTitle = styled.div`
  color: #47c1a3;
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const StatBlock = styled.div`
  margin-bottom: 12px;
  line-height: 1.4;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const StatLine = styled.div`
  color: #ae946f;
  font-size: 14px;

  span.value {
    color: #ffd700;
  }
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const StatAndImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: start;
  margin: 12px 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
  transition: filter 0.2s ease;

  &:hover {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5)) brightness(1.2)
      contrast(1.1);
  }
`;

const SphereButton = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  height: 32px;
  width: 80px;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 4px;
  transition: all 0.1s linear;
  overflow: hidden;

  &:hover {
    border-width: 3px;
  }
`;

const SphereButtonInner = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${sphereButton});
  background-size: cover;
  background-position: center;
  border-radius: 2px;
`;

const ModBlock = styled.div`
  margin: 12px 0;
  line-height: 1.4;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const ModHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 8px 0;
  color: #666;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #666;
    margin: 0 8px;
  }
`;

const ModText = styled.div`
  color: #59c4e5;
  font-size: 14px;
  margin: 1px 0;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const Description = styled.div`
  color: #ff8c00;
  font-style: italic;
  font-size: 13px;
  text-align: center;
  margin: 16px 0;
  padding: 12px 0;
  border-top: 1px solid #333;
  line-height: 1.4;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const ChainInfo = styled.div`
  color: #666;
  font-size: 12px;
  text-align: center;
  padding-top: 12px;
  border-top: 1px solid #333;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

const RequirementsText = styled.div`
  color: #b89c61;
  font-size: 14px;
  margin: 4px 0;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
`;

export const ItemCard = ({ token }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // Get the previous path and state from location
    const previousPath = location.state?.from || "";
    const previousState = location.state?.filterState || {};

    // Now check the path and pass along the filter state
    if (previousPath.includes("/browse")) {
      navigate("/browse", {
        state: {
          activeFilter: isSkill ? "Skills" : "All",
          ...previousState,
        },
      });
    } else if (previousPath.includes("/profile")) {
      navigate("/profile");
    } else {
      // Default to front page if no previous path
      navigate("/");
    }
  };

  const {
    name,
    description,
    image,
    properties: {
      rarity,
      level,
      quality,
      maxDurability,
      attackSpeed,
      range,
      levelRequirement,
      classRequirement,
      itemClass,
      itemSubClass,
      category,
      cooldown,
      resourceCost,
      skillTags,
      armedTypeRequirements,
      nodeMods,
      implicitMods,
      uncommonMods,
      rareMods,
      aetherealMods,
      physicalDamageMin,
      physicalDamageMax,
      lightningDamageMin,
      lightningDamageMax,
      defense,
      attributeRequirements,
      socketMods,
      fireDamageMin,
      fireDamageMax,
      coldDamageMin,
      coldDamageMax,
      aetherDamageMin,
      aetherDamageMax,
      aoeRadius,
      duration,
      projectileSpeed,
      castSpeed,
      destroyedNodes,
    },
    id,
  } = token.metadata;

  const isSkill = Boolean(cooldown !== undefined || skillTags);
  const isJewelry =
    ["Ring", "Amulet", "Bracelet"].includes(itemClass) ||
    category === "Equippables";

  const formatMods = (mods) => {
    if (!mods) return [];
    return mods
      .split(",")
      .map((mod) => mod.trim())
      .filter((mod) => mod);
  };

  const getModType = (mod) => {
    if (mod.includes("(Global)")) return "global";
    if (mod.includes("(Local)")) return "local";
    if (mod.includes("(Base)")) return "base";
    return "local";
  };

  const calculateTotalDamage = () => {
    const physical = [physicalDamageMin || 0, physicalDamageMax || 0];
    const lightning = [lightningDamageMin || 0, lightningDamageMax || 0];
    const fire = [fireDamageMin || 0, fireDamageMax || 0];
    const cold = [coldDamageMin || 0, coldDamageMax || 0];
    const aether = [aetherDamageMin || 0, aetherDamageMax || 0];

    const totalMin = physical[0] + lightning[0] + fire[0] + cold[0] + aether[0];
    const totalMax = physical[1] + lightning[1] + fire[1] + cold[1] + aether[1];

    return [totalMin, totalMax];
  };

  const [totalMin, totalMax] = calculateTotalDamage();

  const getUnformalName = (subClass, itemClass) => {
    const unformalNames = {
      OneHand: "1h",
      TwoHand: "2h",
    };

    const formattedSubClass = unformalNames[subClass] || subClass;
    const formattedItemClass =
      itemClass?.charAt(0)?.toUpperCase() + itemClass?.slice(1);

    return `${formattedSubClass} ${formattedItemClass}`;
  };

  const formatAttributeRequirements = (requirements) => {
    if (!requirements) return null;

    const [toughness, trickery, caliber, brilliance] = requirements
      .split(",")
      .map((v) => parseInt(v.trim()));
    const attrs = [];

    if (toughness > 0) attrs.push(`Toughness ${toughness}`);
    if (trickery > 0) attrs.push(`Trickery ${trickery}`);
    if (caliber > 0) attrs.push(`Caliber ${caliber}`);
    if (brilliance > 0) attrs.push(`Brilliance ${brilliance}`);

    return attrs.length > 0 ? attrs.join(", ") : null;
  };
  return (
    <StyledCard>
      <BackButton onClick={handleBack}>←</BackButton>
      <ItemTitle $rarity={rarity}>{name}</ItemTitle>
      {isSkill && <SubTitle>Skill</SubTitle>}
      {!isSkill && (
        <SubTitle>{getUnformalName(itemSubClass, itemClass)}</SubTitle>
      )}
      <FormalSubTitle>Sealed Aethereal</FormalSubTitle>

      <StatAndImageContainer>
        <StatBlock>
          {!isSkill && (
            <>
              {!isJewelry && (
                <>
                  {quality !== undefined && (
                    <StatLine>Quality: {quality}</StatLine>
                  )}
                  {maxDurability && (
                    <StatLine>Max Durability: {maxDurability}</StatLine>
                  )}
                </>
              )}
              {defense && <StatLine>Defense: {defense}</StatLine>}
              {totalMin > 0 && totalMax > 0 && (
                <>
                  <StatLine>
                    Damage: <span className="value">{totalMin}</span>-
                    <span className="value">{totalMax}</span>
                  </StatLine>
                  {physicalDamageMin > 0 && (
                    <StatLine style={{ color: "#ae946f", marginLeft: "20px" }}>
                      Physical:{" "}
                      <span className="value">{physicalDamageMin}</span>-
                      <span className="value">{physicalDamageMax}</span>
                    </StatLine>
                  )}
                  {fireDamageMin > 0 && (
                    <StatLine style={{ color: "#ae946f", marginLeft: "20px" }}>
                      Fire: <span className="value">{fireDamageMin}</span>-
                      <span className="value">{fireDamageMax}</span>
                    </StatLine>
                  )}
                  {aetherDamageMin > 0 && (
                    <StatLine style={{ color: "#ae946f", marginLeft: "20px" }}>
                      Aether: <span className="value">{aetherDamageMin}</span>-
                      <span className="value">{aetherDamageMax}</span>
                    </StatLine>
                  )}
                  {lightningDamageMin > 0 && (
                    <StatLine style={{ color: "#ae946f", marginLeft: "20px" }}>
                      Lightning:{" "}
                      <span className="value">{lightningDamageMin}</span>-
                      <span className="value">{lightningDamageMax}</span>
                    </StatLine>
                  )}
                  {coldDamageMin > 0 && (
                    <StatLine style={{ color: "#ae946f", marginLeft: "20px" }}>
                      Cold: <span className="value">{coldDamageMin}</span>-
                      <span className="value">{coldDamageMax}</span>
                    </StatLine>
                  )}
                </>
              )}
              {attackSpeed && (
                <StatLine>
                  Attack Speed: <span className="value">{attackSpeed}</span>
                </StatLine>
              )}
              {range && (
                <StatLine>
                  Range: <span className="value">{range}</span>
                </StatLine>
              )}
              <StatLine>Level: {level}</StatLine>
              {castSpeed && (
                <StatLine>
                  Cast Speed: <span className="value">{castSpeed}</span>
                </StatLine>
              )}
              {aoeRadius && (
                <StatLine>
                  AOE Radius: <span className="value">{aoeRadius}</span>
                </StatLine>
              )}
              {duration && (
                <StatLine>
                  Duration: <span className="value">{duration}</span>
                </StatLine>
              )}
              {projectileSpeed && (
                <StatLine>
                  Projectile Speed:{" "}
                  <span className="value">{projectileSpeed}</span>
                </StatLine>
              )}
            </>
          )}
          {isSkill && (
            <>
              <StatLine>Level: {level}</StatLine>
              {cooldown && (
                <StatLine>
                  Cooldown: <span className="value">{cooldown}</span>
                </StatLine>
              )}
              {resourceCost && (
                <StatLine>
                  Cost: Aether <span className="value">{resourceCost}</span>
                </StatLine>
              )}
              {skillTags && <StatLine>Skill Tag: {skillTags}</StatLine>}
              {armedTypeRequirements && (
                <StatLine>Requirements: {armedTypeRequirements}</StatLine>
              )}
            </>
          )}
        </StatBlock>

        <ImageContainer>
          <ItemImage src={image} alt={name} />
          <SphereButton
            onClick={() =>
              window.open(
                `https://testnet.sphere.market/beam-testnet/nft/${ITEMS_CONTRACT}/${id}`
              )
            }
          >
            <SphereButtonInner />
          </SphereButton>
        </ImageContainer>
      </StatAndImageContainer>

      {(levelRequirement ||
        classRequirement ||
        formatAttributeRequirements(attributeRequirements)) && (
        <RequirementsText>
          Requirements:{" "}
          {[
            levelRequirement && `Level ${levelRequirement}`,
            classRequirement,
            formatAttributeRequirements(attributeRequirements),
          ]
            .filter(Boolean)
            .join(", ")}
        </RequirementsText>
      )}

      <ModBlock>
        {/* Node Mods for Skills */}
        {isSkill && nodeMods && formatMods(nodeMods).length > 0 && (
          <>
            <ModHeader>Activated Nodes</ModHeader>
            {formatMods(nodeMods).map((mod, i) => (
              <ModText key={`node-${i}`} $type={getModType(mod)}>
                {mod}
              </ModText>
            ))}
          </>
        )}

        {/* Implicit Mods */}
        {implicitMods &&
          formatMods(implicitMods).map((mod, i) => (
            <ModText key={`implicit-${i}`} $type={getModType(mod)}>
              {mod}
            </ModText>
          ))}

        {/* Uncommon Mods */}
        {uncommonMods && formatMods(uncommonMods).length > 0 && (
          <>
            <ModHeader>Uncommon Affixes</ModHeader>
            {formatMods(uncommonMods).map((mod, i) => (
              <ModText key={`uncommon-${i}`} $type={getModType(mod)}>
                {mod}
              </ModText>
            ))}
          </>
        )}

        {/* Rare Mods */}
        {rareMods && formatMods(rareMods).length > 0 && (
          <>
            <ModHeader>Rare Affixes</ModHeader>
            {formatMods(rareMods).map((mod, i) => (
              <ModText key={`rare-${i}`} $type={getModType(mod)}>
                {mod}
              </ModText>
            ))}
          </>
        )}

        {/* Aethereal Mods */}
        {aetherealMods && formatMods(aetherealMods).length > 0 && (
          <>
            <ModHeader>Aethereal</ModHeader>
            {formatMods(aetherealMods).map((mod, i) => (
              <ModText key={`aethereal-${i}`} $type={getModType(mod)}>
                {mod}
              </ModText>
            ))}
          </>
        )}

        {/* Socket Mods */}
        {socketMods && formatMods(socketMods).length > 0 && (
          <>
            <ModHeader>Socket Modifiers</ModHeader>
            {formatMods(socketMods).map((mod, i) => (
              <ModText key={`socket-${i}`} $type={getModType(mod)}>
                {mod}
              </ModText>
            ))}
          </>
        )}

        {/* Destroyed Nodes for skills */}
        {isSkill && destroyedNodes > 0 && (
          <>
            <ModHeader>Destroyed Nodes</ModHeader>
            <ModText>{destroyedNodes}</ModText>
          </>
        )}
      </ModBlock>
      {description && rarity && rarity === "Unique" && (
        <Description>{description}</Description>
      )}
      <ChainInfo>On-chain Id: {id}</ChainInfo>
    </StyledCard>
  );
};
