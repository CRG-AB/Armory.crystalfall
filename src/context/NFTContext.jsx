import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { fetchTokenIds, fetchNFTs } from "../services/fetchTokenIds.js";
import { filterNFTsByMods } from "../components/MenuComponents/SortByMods.jsx";

const NFTContext = createContext();

// Default filter values
const DEFAULT_FILTERS = {
  searchTerm: "",
  activeCategoryClassFilters: {
    category: {
      Skill: false,
      Armor: false,
      Weapon: false,
      OffHand: false,
      Jewelry: false,
    },
    subCategory: {
      Melee: false,
      Ranged: false,
    },
    itemClass: {
      Axe: false,
      Mace: false,
      Sword: false,
      BodyArmour: false,
      Boots: false,
      Gloves: false,
      Helmet: false,
      Cape: false,
      Pistol: false,
      Rifle: false,
      Shotgun: false,
      Shield: false,
      Codex: false,
      Ring: false,
      Amulet: false,
      Bracelet: false,
      Dagger: false,
    },
    subClass: {
      axe1h: false,
      axe2h: false,
      mace1h: false,
      mace2h: false,
      sword1h: false,
      sword2h: false,
    },
  },
  levelRequirementFilterValue: [0, 100],
  damageFilterValue: [0, 100],
  qualityFilterValue: [1, 5],
  rangeFilterValue: [0, 30],
  attackSpeedFilterValue: [0, 3],
  levelFilterValue: [0, 100],
  checkedDamageType: {
    Fire: false,
    Cold: false,
    Lightning: false,
    Physical: false,
    Aetherial: false,
  },
  checkedRarity: {
    Unique: false,
    Rare: false,
  },
  modsFilterArray: [],
};

const STORAGE_KEY = "nft-filter-state";

export const useNFTContext = () => {
  const context = useContext(NFTContext);
  if (!context) {
    throw new Error("useNFTContext must be used within an NFTProvider");
  }
  return context;
};

export const NFTProvider = ({ children }) => {
  // Initialize filters from storage or use defaults
  const getInitialFilters = () => {
    const savedFilters = localStorage.getItem(STORAGE_KEY);
    return savedFilters ? JSON.parse(savedFilters) : DEFAULT_FILTERS;
  };

  // Update state initialization to use stored filters
  const [filters, setFilters] = useState(getInitialFilters());

  // Update the existing updateFilter function
  const updateFilter = (filterType, newValue) => {
    setFilters((prev) => {
      const updatedFilters = {
        ...prev,
        [filterType]: newValue,
      };
      // Save to localStorage immediately
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFilters));
      return updatedFilters;
    });
  };

  // Add a reset function to clear filters
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    localStorage.removeItem(STORAGE_KEY);
  };

  const [NFTs, setNFTs] = useState([]);
  const [filteredNFTs, setFilteredNFTs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTermInputValue, setSearchTermInputValue] = useState("");

  const isDefaultFilters = useMemo(() => {
    return JSON.stringify(filters) === JSON.stringify(DEFAULT_FILTERS);
  }, [filters]);

  // Fetch NFTs on mount
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const tokenIds = await fetchTokenIds();
        const nfts = await fetchNFTs(tokenIds);
        setNFTs(nfts || []);
        setFilteredNFTs(nfts || []);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setNFTs([]);
        setFilteredNFTs([]);
      }
    }

    fetchData();
  }, []);

  // Update searchTerm after delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateFilter("searchTerm", searchTermInputValue);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchTermInputValue]);

  // Main filtering effect
  useEffect(() => {
    const filterNFTs = (nfts) => {
      if (!nfts) {
        console.log("[Filter] No NFTs available");
        return [];
      }

      // Track removed NFTs and their reasons
      const removedNFTs = [];

      // First apply mods filter
      let filtered = filterNFTsByMods(nfts, filters.modsFilterArray);

      // Then apply other filters
      filtered = filtered.filter((nft) => {
        let metadata = nft.metadata;
        if (metadata.properties?.skillTags) {
          metadata = {
            ...metadata,
            properties: { ...metadata.properties, category: "Skill" },
          };
        }

        // Check for valid metadata
        if (!metadata || !metadata.properties) {
          removedNFTs.push({
            name: metadata?.name || "Unknown" + ": " + metadata.id,
            reason: "Missing metadata or properties",
          });
          return false;
        }

        // Search term filter
        if (
          filters.searchTerm &&
          !metadata.name
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase())
        ) {
          removedNFTs.push({
            name: metadata.name + ": " + metadata.id,
            reason: `Search term "${filters.searchTerm}" not found`,
          });
          return false;
        }

        // Apply stats filters
        if (!filterStats(metadata, removedNFTs)) {
          return false;
        }

        // Filter by Category and Class
        if (filters.activeCategoryClassFilters?.category) {
          const activeCategoryFilters = Object.keys(
            filters.activeCategoryClassFilters.category
          ).filter(
            (key) => filters.activeCategoryClassFilters.category[key] === true
          );

          if (
            activeCategoryFilters.length > 0 &&
            !activeCategoryFilters.includes(metadata.properties.category)
          ) {
            removedNFTs.push({
              name: metadata.name + ": " + metadata.id,
              reason: `Category ${metadata.properties.category} not in selected filters`,
            });
            return false;
          }
        }

        // Category-specific filters
        if (filters.activeCategoryClassFilters?.itemClass) {
          switch (metadata.properties.category) {
            case "":
              return false;
            case "Weapon":
              if (!filterWeapon(metadata, filters.activeCategoryClassFilters)) {
                removedNFTs.push({
                  name: metadata.name + ": " + metadata.id,
                  reason: `Weapon filter failed`,
                });
                return false;
              }
              break;
            case "Armor":
              if (!filterArmor(metadata, filters.activeCategoryClassFilters)) {
                removedNFTs.push({
                  name: metadata.name + ": " + metadata.id,
                  reason: `Armor filter failed`,
                });
                return false;
              }
              break;
            case "OffHand":
              if (
                !filterOffHand(metadata, filters.activeCategoryClassFilters)
              ) {
                removedNFTs.push({
                  name: metadata.name + ": " + metadata.id,
                  reason: `OffHand filter failed`,
                });
                return false;
              }
              break;
            case "Jewelry":
              if (
                !filterJewelry(metadata, filters.activeCategoryClassFilters)
              ) {
                removedNFTs.push({
                  name: metadata.name + ": " + metadata.id,
                  reason: `Jewelry filter failed`,
                });
                return false;
              }
              break;
          }
        }

        return true;
      });

      // Log filtering results
      logFilterResults(nfts.length, filtered.length, removedNFTs);

      return filtered;
    };

    setFilteredNFTs(filterNFTs(NFTs));
  }, [NFTs, filters]);

  const filterStats = (metadata, removedNFTs) => {
    // Calculate total damage
    const totalMaxDamage = [
      metadata.properties.physicalDamageMax || 0,
      metadata.properties.fireDamageMax || 0,
      metadata.properties.coldDamageMax || 0,
      metadata.properties.lightningDamageMax || 0,
      metadata.properties.aetherDamageMax || 0,
      metadata.properties.damageMax || 0,
    ].reduce((sum, damage) => sum + damage, 0);

    // Damage filter
    if (
      filters.damageFilterValue[0] > totalMaxDamage ||
      filters.damageFilterValue[1] < totalMaxDamage
    ) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: `Total damage ${totalMaxDamage} outside range [${filters.damageFilterValue.join(
          "-"
        )}]`,
      });
      return false;
    }

    // Quality filter
    if (
      metadata.properties.quality &&
      (filters.qualityFilterValue[0] > metadata.properties.quality ||
        filters.qualityFilterValue[1] < metadata.properties.quality)
    ) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: `Quality ${
          metadata.properties.quality
        } outside range [${filters.qualityFilterValue.join("-")}]`,
      });
      return false;
    }

    // Range filter
    if (filters.rangeFilterValue[0] > 0 && !metadata.properties.range) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: "No range value when filter is active",
      });
      return false;
    }

    if (
      metadata.properties.range &&
      (filters.rangeFilterValue[0] > metadata.properties.range ||
        filters.rangeFilterValue[1] < metadata.properties.range)
    ) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: `Range ${
          metadata.properties.range
        } outside range [${filters.rangeFilterValue.join("-")}]`,
      });
      return false;
    }

    // Attack Speed filter
    if (
      filters.attackSpeedFilterValue[0] > 0 &&
      !metadata.properties.attackSpeed
    ) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: "No attack speed value when filter is active",
      });
      return false;
    }

    if (
      metadata.properties.attackSpeed &&
      (filters.attackSpeedFilterValue[0] > metadata.properties.attackSpeed ||
        filters.attackSpeedFilterValue[1] < metadata.properties.attackSpeed)
    ) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: `Attack Speed ${
          metadata.properties.attackSpeed
        } outside range [${filters.attackSpeedFilterValue.join("-")}]`,
      });
      return false;
    }

    // Level filter
    if (
      metadata.properties.level &&
      (filters.levelFilterValue[0] > metadata.properties.level ||
        filters.levelFilterValue[1] < metadata.properties.level)
    ) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: `Level ${
          metadata.properties.level
        } outside range [${filters.levelFilterValue.join("-")}]`,
      });
      return false;
    }

    // Damage Type filter
    const checkedTypes = Object.entries(filters.checkedDamageType)
      .filter(([_, checked]) => checked)
      .map(([type]) => type);

    if (checkedTypes.length > 0) {
      const hasDamageTypes = checkedTypes.every((type) => {
        const typeKey = type.toLowerCase();
        return (
          metadata.properties[`${typeKey}DamageMin`] > 0 ||
          metadata.properties[`${typeKey}DamageMax`] > 0
        );
      });

      if (!hasDamageTypes) {
        removedNFTs.push({
          name: metadata.name + ": " + metadata.id,
          reason: `Missing required damage types: ${checkedTypes.join(", ")}`,
        });
        return false;
      }
    }

    // Rarity filter
    const checkedRarities = Object.entries(filters.checkedRarity)
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

    // Level Requirement filter
    if (
      filters.levelRequirementFilterValue[0] > 0 &&
      !metadata.properties.levelRequirement
    ) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: "No level requirement value when filter is active",
      });
      return false;
    }

    if (
      metadata.properties.levelRequirement &&
      (filters.levelRequirementFilterValue[0] >
        metadata.properties.levelRequirement ||
        filters.levelRequirementFilterValue[1] <
          metadata.properties.levelRequirement)
    ) {
      removedNFTs.push({
        name: metadata.name + ": " + metadata.id,
        reason: `Level requirement ${
          metadata.properties.levelRequirement
        } outside range [${filters.levelRequirementFilterValue.join("-")}]`,
      });
      return false;
    }

    return true;
  };

  const logFilterResults = (total, filtered, removedNFTs) => {
    const groupedRemovals = removedNFTs.reduce((acc, item) => {
      acc[item.reason] = acc[item.reason] || [];
      acc[item.reason].push(item.name);
      return acc;
    }, {});

    console.log("[Filter] Filtering complete:", {
      totalNFTs: total,
      filtered: filtered,
      removedNFTs: total - filtered,
      removalReasons: groupedRemovals,
    });
  };

  console.log(filters);
  useEffect(() => {
    console.log(NFTs);
  }, [NFTs]);

  const value = {
    NFTs,
    setNFTs,
    filteredNFTs,
    setFilteredNFTs,
    isLoading,
    filters,
    isDefaultFilters,
    updateFilter,
    searchTermInputValue,
    setSearchTermInputValue,
    DEFAULT_FILTERS,
    resetFilters,
  };

  return <NFTContext.Provider value={value}>{children}</NFTContext.Provider>;
};

// Helper functions for filtering
const filterWeapon = (metadata, filters) => {
  if (filters?.subCategory) {
    const activeSubCategoryFilters = Object.keys(filters.subCategory).filter(
      (key) => filters.subCategory[key] === true
    );

    if (
      activeSubCategoryFilters.length > 0 &&
      !activeSubCategoryFilters.includes(metadata.properties.subCategory)
    ) {
      return false;
    }
  }

  if (filters?.itemClass) {
    const weaponClasses = [
      "Axe",
      "Mace",
      "Sword",
      "Dagger",
      "Pistol",
      "Rifle",
      "Shotgun",
    ];
    const activeWeaponClasses = Object.keys(filters.itemClass).filter(
      (key) => weaponClasses.includes(key) && filters.itemClass[key] === true
    );

    if (
      activeWeaponClasses.length > 0 &&
      !activeWeaponClasses.includes(metadata.properties.itemClass)
    ) {
      return false;
    }
  }

  return filterWeaponSubClass(metadata, filters);
};

const filterWeaponSubClass = (metadata, filters) => {
  if (filters?.subClass) {
    const activeSubClassFilters = Object.keys(filters.subClass).filter(
      (key) => filters.subClass[key] === true
    );

    if (activeSubClassFilters.length > 0) {
      const itemClass = metadata.properties.itemClass;
      const itemSubClass = metadata.properties.itemSubClass;
      let matchesSubClass = false;

      if (itemClass === "Sword") {
        matchesSubClass =
          (activeSubClassFilters.includes("sword1h") &&
            itemSubClass === "OneHand") ||
          (activeSubClassFilters.includes("sword2h") &&
            itemSubClass === "TwoHand");
      } else if (itemClass === "Axe") {
        matchesSubClass =
          (activeSubClassFilters.includes("axe1h") &&
            itemSubClass === "OneHand") ||
          (activeSubClassFilters.includes("axe2h") &&
            itemSubClass === "TwoHand");
      } else if (itemClass === "Mace") {
        matchesSubClass =
          (activeSubClassFilters.includes("mace1h") &&
            itemSubClass === "OneHand") ||
          (activeSubClassFilters.includes("mace2h") &&
            itemSubClass === "TwoHand");
      }

      if (!matchesSubClass) {
        return false;
      }
    }
  }
  return true;
};

const filterArmor = (metadata, filters) => {
  if (filters?.itemClass) {
    const armorClasses = ["BodyArmour", "Boots", "Gloves", "Helmet", "Cape"];
    const activeArmorClasses = Object.keys(filters.itemClass).filter(
      (key) => armorClasses.includes(key) && filters.itemClass[key] === true
    );

    if (
      activeArmorClasses.length > 0 &&
      !activeArmorClasses.includes(metadata.properties.itemClass)
    ) {
      return false;
    }
  }
  return true;
};

const filterOffHand = (metadata, filters) => {
  if (filters?.itemClass) {
    const offHandClasses = ["Shield", "Codex"];
    const activeOffHandClasses = Object.keys(filters.itemClass).filter(
      (key) => offHandClasses.includes(key) && filters.itemClass[key] === true
    );

    if (
      activeOffHandClasses.length > 0 &&
      !activeOffHandClasses.includes(metadata.properties.itemClass)
    ) {
      return false;
    }
  }
  return true;
};

const filterJewelry = (metadata, filters) => {
  if (filters?.itemClass) {
    const jewelryClasses = ["Ring", "Amulet", "Bracelet"];
    const activeJewelryClasses = Object.keys(filters.itemClass).filter(
      (key) => jewelryClasses.includes(key) && filters.itemClass[key] === true
    );

    if (
      activeJewelryClasses.length > 0 &&
      !activeJewelryClasses.includes(metadata.properties.itemClass)
    ) {
      return false;
    }
  }
  return true;
};
