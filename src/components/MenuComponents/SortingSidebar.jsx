import { useState, useEffect } from "react";

import { Sidebar, Menu } from "react-pro-sidebar";
import { MenuCheckbox } from "./MenuCheckbox.jsx";
import { MenuSlider } from "./MenuSlider.jsx";
import { ItemCategoryClassFilter } from "./ItemCategoryClassFilter.jsx";
import { SortByMods } from "./SortByMods.jsx";
import { Expandable } from "../buttons/Expandable.jsx";
import { Input } from "../ui/Input.jsx";
import { SubMenu } from "react-pro-sidebar";

{
  /* 
  <SortingSidebar
      isSidebarOpen={isSidebarOpen}
      nfts={nfts}
      setFilteredNFTs={setFilteredNFTs}
  /> 
  */
}

export const SortingSidebar = ({
  isSidebarOpen,
  nfts,
  setFilteredNFTs,
  setIsSidebarOpen,
}) => {
  // Filter values
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategoryClassFilters, setActiveCategoryClassFilters] = useState(
    []
  );
  const [levelRequirementFilterValue, setLevelRequirementFilterValue] =
    useState([0, 100]); // THIS
  const [damageFilterValue, setDamageFilterValue] = useState([0, 100]); /// DISCUSS THIS
  const [qualityFilterValue, setQualityFilterValue] = useState([1, 5]);
  const [rangeFilterValue, setRangeFilterValue] = useState([0, 30]); ///// THIS
  const [attackSpeedFilterValue, setAttackSpeedFilterValue] = useState([0, 10]); ///// THIS
  const [levelFilterValue, setLevelFilterValue] = useState([0, 100]); ///// THIS
  const [checkedDamageType, setCheckedDamageType] = useState({
    Fire: false,
    Cold: false,
    Lightning: false,
    Physical: false,
    Aetherial: false,
  });
  const [checkedRarity, setCheckedRarity] = useState({
    Legendary: false,
    Rare: false,
  });
  const [modsFilterArray, setModsFilterArray] = useState([]);

  // Update searchTerm 1 second after inputValue changes
  const [searchTermInputValue, setSearchTermInputValue] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchTerm(searchTermInputValue);
    }, 1000);

    // Clear the timeout when inputValue changes or when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [searchTermInputValue]);

  /////////////////// Only one season for now ///////////////////
  // const [checkedItemSeason, setCheckedItemSeason] = useState({
  //   "Open Beta": false,
  // });
  /////////////////// Only one season for now ///////////////////

  /////////////////// STEP 2 ///////////////////
  // Filter NFTs
  /////////////////// STEP 2 ///////////////////

  useEffect(() => {
    const filterNFTs = (nfts) => {
      if (!nfts) {
        console.log("[Filter] No NFTs available");
        return [];
      }

      // Track removed NFTs and their reasons
      const removedNFTs = [];

      const filtered = nfts.filter((nft) => {
        const metadata = nft.metadata;

        // Check for valid metadata
        if (!metadata || !metadata.properties) {
          removedNFTs.push({
            name: metadata?.name || "Unknown" + ": " + metadata.id,
            reason: "Missing metadata or properties",
          });
          return false;
        }

        if (metadata.properties.rarity === "Unique") {
          return false;
        }

        // Search term filter
        if (
          searchTerm &&
          !metadata.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          removedNFTs.push({
            name: metadata.name + ": " + metadata.id,
            reason: `Search term "${searchTerm}" not found`,
          });
          return false;
        }

        // Filter by Category and Class
        let activeCategoryFilters = [];
        let activeSubCategoryFilters = [];
        let activeClassFilters = [];

        // Filter "category"
        if (activeCategoryClassFilters?.category) {
          activeCategoryFilters = Object.keys(activeCategoryClassFilters.category)
            .filter((key) => activeCategoryClassFilters.category[key] === true);
          
          if (activeCategoryFilters.length > 0 && !activeCategoryFilters.includes(metadata.properties.category)) {
            return false;
          }
        }

        // Filter "subCategory"
        if (activeCategoryFilters.length > 0 && activeCategoryClassFilters?.subCategory) {
          activeSubCategoryFilters = Object.keys(activeCategoryClassFilters.subCategory)
            .filter((key) => activeCategoryClassFilters.subCategory[key] === true);
          
          if (activeSubCategoryFilters.length > 0 && !activeSubCategoryFilters.includes(metadata.properties.subCategory)) {
            return false;
          }
        }

        // Filter "class"
        if (activeCategoryFilters.length > 0 && 
            activeSubCategoryFilters.length > 0 && 
            activeCategoryClassFilters?.itemClass) {
          activeClassFilters = Object.keys(activeCategoryClassFilters.itemClass)
            .filter((key) => activeCategoryClassFilters.itemClass[key] === true);
          
          if (activeClassFilters.length > 0 && !activeClassFilters.includes(metadata.properties.itemClass)) {
            return false;
          }
        }

        // Filter "subClass"
        if (activeCategoryFilters.length > 0 && 
            activeSubCategoryFilters.length > 0 && 
            activeCategoryClassFilters?.subClass) {
          let activeSubClassFilters = Object.keys(activeCategoryClassFilters.subClass)
            .filter((key) => activeCategoryClassFilters.subClass[key] === true);

          let bool = true;
          if (activeSubClassFilters.length > 0) {
            switch (metadata.properties.itemClass) {
              case "Sword":
                if (
                  activeSubClassFilters.includes("sword1h") ||
                  activeSubClassFilters.includes("sword2h")
                ) {
                  if (
                    (!activeSubClassFilters.includes("sword1h") &&
                      metadata.properties.itemSubClass == "OneHand") ||
                    (!activeSubClassFilters.includes("sword2h") &&
                      metadata.properties.itemSubClass == "TwoHand")
                  )
                    bool = false;
                }
                break;
              case "Axe":
                if (
                  activeSubClassFilters.includes("axe1h") ||
                  activeSubClassFilters.includes("axe2h")
                ) {
                  if (
                    (!activeSubClassFilters.includes("axe1h") &&
                      metadata.properties.itemSubClass == "OneHand") ||
                    (!activeSubClassFilters.includes("axe2h") &&
                      metadata.properties.itemSubClass == "TwoHand")
                  )
                    bool = false;
                }
                break;
              case "Mace":
                if (
                  activeSubClassFilters.includes("mace1h") ||
                  activeSubClassFilters.includes("mace2h")
                ) {
                  if (
                    (!activeSubClassFilters.includes("mace1h") &&
                      metadata.properties.itemSubClass == "OneHand") ||
                    (!activeSubClassFilters.includes("mace2h") &&
                      metadata.properties.itemSubClass == "TwoHand")
                  )
                    bool = false;
                }
                break;
            }
          }
          if (!bool) return false;
        }

        // Damage filter
        if (damageFilterValue) {
          // Calculate total max damage from all damage types
          const totalMaxDamage = [
            metadata.properties.physicalDamageMax || 0,
            metadata.properties.fireDamageMax || 0,
            metadata.properties.coldDamageMax || 0,
            metadata.properties.lightningDamageMax || 0,
            metadata.properties.aetherDamageMax || 0,
            // Include the generic damageMax as well
            metadata.properties.damageMax || 0,
          ].reduce((sum, damage) => sum + damage, 0);

          if (
            damageFilterValue[0] > totalMaxDamage ||
            damageFilterValue[1] < totalMaxDamage
          ) {
            removedNFTs.push({
              name: metadata.name + ": " + metadata.id,
              reason: `Total damage ${totalMaxDamage} outside range [${damageFilterValue.join(
                "-"
              )}]`,
            });
            return false;
          }
        }

        // Quality filter
        if (
          metadata.properties.quality &&
          (qualityFilterValue[0] > metadata.properties.quality ||
            qualityFilterValue[1] < metadata.properties.quality)
        ) {
          removedNFTs.push({
            name: metadata.name + ": " + metadata.id,
            reason: `Quality ${
              metadata.properties.quality
            } outside range [${qualityFilterValue.join("-")}]`,
          });
          return false;
        }

        // Range filter
        if (
          metadata.properties.range &&
          (rangeFilterValue[0] > metadata.properties.range ||
            rangeFilterValue[1] < metadata.properties.range)
        ) {
          removedNFTs.push({
            name: metadata.name + ": " + metadata.id,
            reason: `Range ${
              metadata.properties.range
            } outside range [${rangeFilterValue.join("-")}]`,
          });
          return false;
        }

        // Attack Speed filter
        if (
          metadata.properties.attackSpeed &&
          (attackSpeedFilterValue[0] > metadata.properties.attackSpeed ||
            attackSpeedFilterValue[1] < metadata.properties.attackSpeed)
        ) {
          removedNFTs.push({
            name: metadata.name + ": " + metadata.id,
            reason: `Attack Speed ${
              metadata.properties.attackSpeed
            } outside range [${attackSpeedFilterValue.join("-")}]`,
          });
          return false;
        }

        // Level filter
        if (
          metadata.properties.level &&
          (levelFilterValue[0] > metadata.properties.level ||
            levelFilterValue[1] < metadata.properties.level)
        ) {
          removedNFTs.push({
            name: metadata.name + ": " + metadata.id,
            reason: `Level ${
              metadata.properties.level
            } outside range [${levelFilterValue.join("-")}]`,
          });
          return false;
        }

        // Damage Type filter
        const checkedDamageTypes = Object.entries(checkedDamageType)
          .filter(([_, checked]) => checked)
          .map(([type]) => type);

        if (
          checkedDamageTypes.length > 0 &&
          !checkedDamageTypes.includes(metadata.properties.damageType)
        ) {
          removedNFTs.push({
            name: metadata.name + ": " + metadata.id,
            reason: `Damage type ${
              metadata.properties.damageType
            } not in [${checkedDamageTypes.join(", ")}]`,
          });
          return false;
        }

        // Rarity filter
        const checkedRarities = Object.entries(checkedRarity)
          .filter(([_, checked]) => checked)
          .map(([type]) => type);

        if (
          checkedRarities.length > 0 &&
          !checkedRarities.includes(metadata.properties.rarity)
        ) {
          removedNFTs.push({
            name: metadata.name + ": " + metadata.id,
            reason: `Rarity ${
              metadata.properties.rarity
            } not in [${checkedRarities.join(", ")}]`,
          });
          return false;
        }

        return true;
      });

      // Group removed NFTs by reason
      const groupedRemovals = removedNFTs.reduce((acc, item) => {
        acc[item.reason] = acc[item.reason] || [];
        acc[item.reason].push(item.name);
        return acc;
      }, {});

      console.log("[Filter] Filtering complete:", {
        totalNFTs: nfts.length,
        filtered: filtered.length,
        removedNFTs: nfts.length - filtered.length,
        removalReasons: groupedRemovals,
      });

      return filtered;
    };

    setFilteredNFTs(filterNFTs(nfts));
  }, [
    nfts,
    searchTerm,
    activeCategoryClassFilters,
    levelRequirementFilterValue,
    damageFilterValue,
    qualityFilterValue,
    rangeFilterValue,
    attackSpeedFilterValue,
    levelFilterValue,
    checkedDamageType,
    checkedRarity,
    modsFilterArray,
  ]);

  const menuItemStyles = {
    root: {
      fontSize: "16px",
      fontWeight: 400,
      border: "none",
    },
    icon: {
      [``]: {},
    },
    SubMenuExpandIcon: {},
    subMenuContent: {
      backgroundColor: "#151419",
      "& > ul > div:hover": {
        backgroundColor: "#49494935",
        boxShadow: "inset 0 0 0 2px #2c2b33",
        transition: "0.3s ease-in-out",
      },
    },
    button: {
      backgroundColor: "#1c1b21",
      "&:hover": {
        backgroundColor: "#2c2b33",
      },
    },
    label: {
      background: "linear-gradient(to right, #a59a78, #909090)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  return (
    <div className="top-0 left-0">
      <Expandable
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        className="!absolute top-0 left-0 z-10 h-10 w-64 transition-all duration-500 ease-out"
      />
      <Sidebar
        backgroundColor="#151419"
        className={`h-full top-0 left-0 z-40 animate-smooth-right ${
          isSidebarOpen ? "block translate-x-0" : "hidden -translate-x-full"
        }`}
        width="300px"
        rootStyles={{
          border: "none",
          boxShadow: "0px 0px 10px 0px #000000",
        }}
      >
        <Menu menuItemStyles={menuItemStyles}>
          {/*  
              Season
              Class Requirement
            */}
          <SubMenu label="Search" defaultOpen="true">
            <Input
              placeholder={"Item Name..."}
              value={searchTermInputValue}
              onChange={(e) => setSearchTermInputValue(e.target.value)}
              className="w-[300px] h-[60px] text-md"
            />
          </SubMenu>
          <SortByMods
            modsFilterArray={modsFilterArray}
            setModList={setModsFilterArray}
            defaultOpen={true}
          />
          <ItemCategoryClassFilter
            setActiveCategoryClassFilters={setActiveCategoryClassFilters}
            defaultOpen={true}
          />
          <MenuCheckbox
            name="Rarity"
            items={["Legendary", "Rare"]}
            checked={checkedRarity}
            setChecked={setCheckedRarity}
            isSidebarOpen={isSidebarOpen}
            defaultOpen={true}
          />
          <MenuSlider
            name={"Level"}
            value={levelFilterValue}
            setValue={setLevelFilterValue}
            min={0}
            max={100}
            defaultOpen={false}
          />

          <MenuSlider
            name="Damage"
            value={damageFilterValue}
            setValue={setDamageFilterValue}
          />
          <MenuSlider
            name="Quality"
            value={qualityFilterValue}
            setValue={setQualityFilterValue}
            min={1}
            max={5}
          />
          <MenuSlider
            name="Range"
            value={rangeFilterValue}
            setValue={setRangeFilterValue}
            min={0}
            max={10}
          />
          <MenuCheckbox
            name="Damage Type"
            items={["Fire", "Cold", "Lightning", "Physical", "Aetherial"]}
            checked={checkedDamageType}
            setChecked={setCheckedDamageType}
            isSidebarOpen={isSidebarOpen}
          />
          <MenuSlider
            name={"Attack Speed"}
            value={attackSpeedFilterValue}
            setValue={setAttackSpeedFilterValue}
            min={0}
            max={10}
          />

          <MenuSlider
            name="Level Requirement"
            value={levelRequirementFilterValue}
            setValue={setLevelRequirementFilterValue}
          />
          {/* 
             /////////////////// Only one season for now ///////////////////
            <MenuCheckbox
              name="Item Season"
              items={["Open Beta"]}
              checked={checkedItemSeason}
              setChecked={setCheckedItemSeason}/> 
              /////////////////// Only one season for now ///////////////////
              */}
        </Menu>
      </Sidebar>
    </div>
  );
};
