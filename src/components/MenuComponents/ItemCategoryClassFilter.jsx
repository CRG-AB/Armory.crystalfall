import React, { useEffect, useState } from "react";

import { SubMenu } from "react-pro-sidebar";
import { Checkbox } from "../buttons/Checkbox";

export const ItemCategoryClassFilter = ({
  setActiveCategoryClassFilters,
  isSidebarOpen,
  defaultOpen,
}) => {
  // Category
  const [armorFilter, setArmorFilter] = useState(false);
  const [weaponFilter, setWeaponFilter] = useState(false);
  const [offHandFilter, setOffHandFilter] = useState(false);
  const [jewelryFilter, setJewelryFilter] = useState(false);

  // subCategory
  const [meleeFilter, setMeleeFilter] = useState(false);
  const [rangedFilter, setRangedFilter] = useState(false);

  // itemClass
  const [axeFilter, setAxeFilter] = useState(false);
  const [maceFilter, setMaceFilter] = useState(false);
  const [swordFilter, setSwordFilter] = useState(false);
  const [daggerFilter, setDaggerFilter] = useState(false);
  const [bodyFilter, setBodyFilter] = useState(false);
  const [bootsFilter, setBootsFilter] = useState(false);
  const [glovesFilter, setGlovesFilter] = useState(false);
  const [headFilter, setHeadFilter] = useState(false);
  const [capeFilter, setCapeFilter] = useState(false);
  const [pistolFilter, setPistolFilter] = useState(false);
  const [rifleFilter, setRifleFilter] = useState(false);
  const [shotgunFilter, setShotgunFilter] = useState(false);
  const [shieldFilter, setShieldFilter] = useState(false);
  const [codexFilter, setCodexFilter] = useState(false);
  const [ringFilter, setRingFilter] = useState(false);
  const [amuletFilter, setAmuletFilter] = useState(false);
  const [braceletFilter, setBraceletFilter] = useState(false);

  // subClass
  const [axe1hFilter, setAxe1hFilter] = useState(false);
  const [axe2hFilter, setAxe2hFilter] = useState(false);
  const [mace1hFilter, setMace1hFilter] = useState(false);
  const [mace2hFilter, setMace2hFilter] = useState(false);
  const [sword1hFilter, setSword1hFilter] = useState(false);
  const [sword2hFilter, setSword2hFilter] = useState(false);

  // Clear functions for each category's children
  const clearArmorChildren = () => {
    setBodyFilter(false);
    setBootsFilter(false);
    setGlovesFilter(false);
    setHeadFilter(false);
    setCapeFilter(false);
  };

  const clearWeaponChildren = () => {
    setMeleeFilter(false);
    setRangedFilter(false);
    clearMeleeChildren();
    clearRangedChildren();
  };

  const clearOffHandChildren = () => {
    setShieldFilter(false);
    setCodexFilter(false);
  };

  const clearJewelryChildren = () => {
    setRingFilter(false);
    setAmuletFilter(false);
    setBraceletFilter(false);
  };

  const clearMeleeChildren = () => {
    setAxeFilter(false);
    setMaceFilter(false);
    setSwordFilter(false);
    setDaggerFilter(false);
    clearAxeChildren();
    clearMaceChildren();
    clearSwordChildren();
  };

  const clearRangedChildren = () => {
    setPistolFilter(false);
    setRifleFilter(false);
    setShotgunFilter(false);
  };

  const clearAxeChildren = () => {
    setAxe1hFilter(false);
    setAxe2hFilter(false);
  };

  const clearMaceChildren = () => {
    setMace1hFilter(false);
    setMace2hFilter(false);
  };

  const clearSwordChildren = () => {
    setSword1hFilter(false);
    setSword2hFilter(false);
  };

  useEffect(() => {
    const filters = {
      category: {
        Armor: armorFilter,
        Weapon: weaponFilter,
        OffHand: offHandFilter,
        Jewelry: jewelryFilter,
      },
      subCategory: {
        Melee: meleeFilter,
        Ranged: rangedFilter,
      },
      itemClass: {
        Axe: axeFilter,
        Mace: maceFilter,
        Sword: swordFilter,
        BodyArmour: bodyFilter,
        Boots: bootsFilter,
        Gloves: glovesFilter,
        Helmet: headFilter,
        Cape: capeFilter,
        Pistol: pistolFilter,
        Rifle: rifleFilter,
        Shotgun: shotgunFilter,
        Shield: shieldFilter,
        Codex: codexFilter,
        Ring: ringFilter,
        Amulet: amuletFilter,
        Bracelet: braceletFilter,
        Dagger: daggerFilter,
      },
      subClass: {
        axe1h: axe1hFilter,
        axe2h: axe2hFilter,
        mace1h: mace1hFilter,
        mace2h: mace2hFilter,
        sword1h: sword1hFilter,
        sword2h: sword2hFilter,
      },
    };
    setActiveCategoryClassFilters(filters);
  }, [
    armorFilter,
    weaponFilter,
    offHandFilter,
    jewelryFilter,
    meleeFilter,
    rangedFilter,
    axeFilter,
    maceFilter,
    swordFilter,
    bodyFilter,
    bootsFilter,
    glovesFilter,
    daggerFilter,
    headFilter,
    capeFilter,
    shieldFilter,
    codexFilter,
    ringFilter,
    amuletFilter,
    braceletFilter,
    pistolFilter,
    rifleFilter,
    shotgunFilter,
    axe1hFilter,
    axe2hFilter,
    mace1hFilter,
    mace2hFilter,
    sword1hFilter,
    sword2hFilter,
  ]);

  return (
    <SubMenu label="Categories" defaultOpen={defaultOpen}>
      {/* ARMOR */}
      <Checkbox
        name="Armor"
        onChange={() => {
          const newValue = !armorFilter;
          setArmorFilter(newValue);
          if (!newValue) clearArmorChildren();
        }}
        checked={armorFilter}
      />
      {armorFilter && (
        <>
          <Checkbox
            name="Body"
            onChange={() => setBodyFilter(!bodyFilter)}
            checked={bodyFilter}
            level={1}
          />
          <Checkbox
            name="Boots"
            onChange={() => setBootsFilter(!bootsFilter)}
            checked={bootsFilter}
            level={1}
          />
          <Checkbox
            name="Gloves"
            onChange={() => setGlovesFilter(!glovesFilter)}
            checked={glovesFilter}
            level={1}
          />
          <Checkbox
            name="Head"
            onChange={() => setHeadFilter(!headFilter)}
            checked={headFilter}
            level={1}
          />
          <Checkbox
            name="Cape"
            onChange={() => setCapeFilter(!capeFilter)}
            checked={capeFilter}
            level={1}
          />
        </>
      )}
      {/* WEAPON */}
      <Checkbox
        name="Weapon"
        onChange={() => {
          const newValue = !weaponFilter;
          setWeaponFilter(newValue);
          if (!newValue) clearWeaponChildren();
        }}
        checked={weaponFilter}
      />
      {weaponFilter && (
        <>
          <Checkbox
            name="Melee"
            onChange={() => {
              const newValue = !meleeFilter;
              setMeleeFilter(newValue);
              if (!newValue) clearMeleeChildren();
            }}
            checked={meleeFilter}
            level={1}
          />
          {meleeFilter && (
            <>
              <Checkbox
                name="Axe"
                onChange={() => {
                  const newValue = !axeFilter;
                  setAxeFilter(newValue);
                  if (!newValue) clearAxeChildren();
                }}
                checked={axeFilter}
                level={2}
              />
              {axeFilter && (
                <>
                  <Checkbox
                    name="1h"
                    onChange={() => setAxe1hFilter(!axe1hFilter)}
                    checked={axe1hFilter}
                    level={3}
                  />
                  <Checkbox
                    name="2h"
                    onChange={() => setAxe2hFilter(!axe2hFilter)}
                    checked={axe2hFilter}
                    level={3}
                  />
                </>
              )}
              <Checkbox
                name="Dagger"
                onChange={() => setDaggerFilter(!daggerFilter)}
                checked={daggerFilter}
                level={2}
              />
              <Checkbox
                name="Mace"
                onChange={() => {
                  const newValue = !maceFilter;
                  setMaceFilter(newValue);
                  if (!newValue) clearMaceChildren();
                }}
                checked={maceFilter}
                level={2}
              />
              {maceFilter && (
                <>
                  <Checkbox
                    name="1h"
                    onChange={() => setMace1hFilter(!mace1hFilter)}
                    checked={mace1hFilter}
                    level={3}
                  />
                  <Checkbox
                    name="2h"
                    onChange={() => setMace2hFilter(!mace2hFilter)}
                    checked={mace2hFilter}
                    level={3}
                  />
                </>
              )}
              <Checkbox
                name="Sword"
                onChange={() => {
                  const newValue = !swordFilter;
                  setSwordFilter(newValue);
                  if (!newValue) clearSwordChildren();
                }}
                checked={swordFilter}
                level={2}
              />
              {swordFilter && (
                <>
                  <Checkbox
                    name="1h"
                    onChange={() => setSword1hFilter(!sword1hFilter)}
                    checked={sword1hFilter}
                    level={3}
                  />
                  <Checkbox
                    name="2h"
                    onChange={() => setSword2hFilter(!sword2hFilter)}
                    checked={sword2hFilter}
                    level={3}
                  />
                </>
              )}
            </>
          )}
          <Checkbox
            name="Ranged"
            onChange={() => {
              const newValue = !rangedFilter;
              setRangedFilter(newValue);
              if (!newValue) clearRangedChildren();
            }}
            checked={rangedFilter}
            level={1}
          />
          {rangedFilter && (
            <>
              <Checkbox
                name="Pistol"
                onChange={() => setPistolFilter(!pistolFilter)}
                checked={pistolFilter}
                level={2}
              />
              <Checkbox
                name="Rifle"
                onChange={() => setRifleFilter(!rifleFilter)}
                checked={rifleFilter}
                level={2}
              />
              <Checkbox
                name="Shotgun"
                onChange={() => setShotgunFilter(!shotgunFilter)}
                checked={shotgunFilter}
                level={2}
              />
            </>
          )}
        </>
      )}
      {/* OFF-HAND */}
      <Checkbox
        name="Off-Hand"
        onChange={() => {
          const newValue = !offHandFilter;
          setOffHandFilter(newValue);
          if (!newValue) clearOffHandChildren();
        }}
        checked={offHandFilter}
      />
      {offHandFilter && (
        <>
          <Checkbox
            name="Shield"
            onChange={() => setShieldFilter(!shieldFilter)}
            checked={shieldFilter}
            level={1}
          />
          <Checkbox
            name="Codex"
            onChange={() => setCodexFilter(!codexFilter)}
            checked={codexFilter}
            level={1}
          />
        </>
      )}
      {/* JEWELRY */}
      <Checkbox
        name="Jewelry"
        onChange={() => {
          const newValue = !jewelryFilter;
          setJewelryFilter(newValue);
          if (!newValue) clearJewelryChildren();
        }}
        checked={jewelryFilter}
      />
      {jewelryFilter && (
        <>
          <Checkbox
            name="Ring"
            onChange={() => setRingFilter(!ringFilter)}
            checked={ringFilter}
            level={1}
          />
          <Checkbox
            name="Amulet"
            onChange={() => setAmuletFilter(!amuletFilter)}
            checked={amuletFilter}
            level={1}
          />
          <Checkbox
            name="Bracelet"
            onChange={() => setBraceletFilter(!braceletFilter)}
            checked={braceletFilter}
            level={1}
          />
        </>
      )}
    </SubMenu>
  );
};
