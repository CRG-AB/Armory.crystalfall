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
  const [rangeFilterValue, setRangeFilterValue] = useState([0, 10]); ///// THIS
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
      if (!nfts || activeCategoryClassFilters.length <= 0) return [];
      return nfts.filter((nft) => {
        const metadata = nft.metadata;
        if (!metadata.properties) {
          return false;
        }
        let activeCategoryFilters = [];
        let activeSubCategoryFilters = [];
        let activeClassFilters = [];

        // filter by searchTerm
        if (
          searchTerm &&
          !metadata.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return false;
        }

        // Filter by Category and Class
        // Filter "category"
        activeCategoryFilters = Object.keys(
          activeCategoryClassFilters.category
        ).filter((key) => activeCategoryClassFilters.category[key] === true);
        if (
          activeCategoryFilters.length > 0 &&
          !activeCategoryFilters.includes(metadata.properties.category)
        ) {
          return false;
        }

        // Filter "subCategory"
        if (activeCategoryFilters.length > 0) {
          activeSubCategoryFilters = Object.keys(
            activeCategoryClassFilters.subCategory
          ).filter(
            (key) => activeCategoryClassFilters.subCategory[key] === true
          );
          if (
            activeSubCategoryFilters.length > 0 &&
            !activeSubCategoryFilters.includes(
              metadata.properties.subCategory
            ) &&
            metadata.properties.category == "Weapon"
          ) {
            return false;
          }
        }

        // Filter "itemClass"
        if (activeCategoryFilters.length > 0) {
          activeClassFilters = Object.keys(
            activeCategoryClassFilters.itemClass
          ).filter((key) => activeCategoryClassFilters.itemClass[key] === true);
          if (
            activeClassFilters.length > 0 &&
            !activeClassFilters.includes(metadata.properties.itemClass)
          ) {
            return false;
          }
        }

        // Filter "subClass"
        if (
          activeCategoryFilters.length > 0 &&
          activeSubCategoryFilters.length > 0 &&
          metadata.properties.category == "Weapon"
        ) {
          let activeSubClassFilters = Object.keys(
            activeCategoryClassFilters.subClass
          ).filter((key) => activeCategoryClassFilters.subClass[key] === true);

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
        // Filter by LevelRequirement
        if (levelRequirementFilterValue) {
          if (
            levelRequirementFilterValue[0] >
              metadata.properties.levelRequirement ||
            levelRequirementFilterValue[1] <
              metadata.properties.levelRequirement
          ) {
            return false;
          }
        }

        // Filter by DamageFilterValue
        if (damageFilterValue) {
          if (
            damageFilterValue[0] > metadata.properties.damageMax || // If the min damage is greater than the max damage
            damageFilterValue[1] < metadata.properties.damageMax // If the max damage is less than the min damage
          ) {
            return false;
          }
        }
        // Filter by QualityFilterValue
        if (
          qualityFilterValue[0] > metadata.properties.quality ||
          qualityFilterValue[1] < metadata.properties.quality
        ) {
          return false;
        }

        // Filter by RangeFilterValue
        if (
          rangeFilterValue[0] > metadata.properties.range ||
          rangeFilterValue[1] < metadata.properties.range
        ) {
          return false;
        }

        // Filter by AttackSpeedFilterValue
        if (
          attackSpeedFilterValue[0] > metadata.properties.attackSpeed ||
          attackSpeedFilterValue[1] < metadata.properties.attackSpeed
        ) {
          return false;
        }
        // Filter by LevelFilterValue
        if (
          levelFilterValue[0] > metadata.properties.level ||
          levelFilterValue[1] < metadata.properties.level
        ) {
          return false;
        }

        // Filter by checkedDamageType
        const checkedDamageTypes = Object.keys(checkedDamageType).filter(
          (key) => checkedDamageType[key] == true
        );
        if (
          checkedDamageTypes.length > 0 &&
          !checkedDamageTypes.includes(metadata.properties.damageType)
        ) {
          return false;
        }

        // Filter by checkedRarity
        const checkedRarities = Object.keys(checkedRarity).filter(
          (key) => checkedRarity[key] == true
        );
        if (
          checkedRarities.length > 0 &&
          !checkedRarities.includes(metadata.properties.rarity)
        ) {
          return false;
        }

        // Filter by checkedItemSeason
        // NOT YET IMPLEMENTED /////
        //////////////////////////////

        //////////////////////////////
        // Filter by modsFilterArray
        /////////////////////////////
        if (modsFilterArray.length > 0) {
          // combine list of all nfts mods: metadata.properties.mods, metadata.properties.implicitMods, metadata.properties.aetherealMods
          const allItemMods = [
            metadata.properties.mods,
            metadata.properties.implicitMods,
            metadata.properties.aetherealMods,
          ].join(", ");
          // If the NFT does not have any mods, exclude it
          if (!allItemMods) {
            return false;
          }
          // format the mods like this: [{mod: "modName", value: int("value")}{mod: "modName2", value: "value2"}} and store them in an array, Nfts mods come like this: " +value modName,+value2 modName2, +value3 modName3"
          const formattedItemMods = allItemMods.split(",").map((mod) => {
            const splitMod = mod.trim().split(" ");
            return {
              mod: splitMod.slice(1).join(""),
              value: parseInt(splitMod[0]),
            };
          });
          // If the NFT does not have all the mods in the modList, exclude it. Check the min and max values of the mods
          if (
            !modsFilterArray.every((filterMod) => {
              console.log(filterMod);
              return formattedItemMods.some(
                (itemMod) =>
                  filterMod.mod == itemMod.mod &&
                  (filterMod.min == "" || itemMod.value >= filterMod.min) &&
                  (filterMod.max == "" || itemMod.value <= filterMod.max)
              );
            })
          ) {
            return false;
          }
        }
        // If the NFT does not have all the mods in the modList, exclude it. Check the min and max values of the mods

        // If none of the filters excluded the NFT, include it in the results
        return true;
      });
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
    // checkedItemSeason,
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
        className="!absolute top-0 left-0 z-40 h-10 w-64 transition-all duration-500 ease-out"
      />
      <Sidebar
        backgroundColor="#151419"
        className={`h-full top-0 left-0 z-50 animate-smooth-right ${
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
