import React, { useState } from "react";
import { SubMenu } from "react-pro-sidebar";
import mods from "./mods.json";
import { Plus, X } from "lucide-react";
import boxBakgroundSelected from "../../img/ui/box-background-selected.webp";

// Helper function to check if an NFT has a specific mod
const nftHasMod = (nft, mod) => {
  const { implicitMods, aetherealMods, uncommonMods, rareMods } =
    nft.metadata.properties;

  // Combine all mods into a single string and convert to lowercase for case-insensitive comparison
  const allModsString =
    `${implicitMods} ${aetherealMods} ${uncommonMods} ${rareMods}`.toLowerCase();

  // Remove the value and (Global) suffix from mods for comparison
  // e.g., "10% Damage Increased(Global)" -> "damage increased"
  const normalizedMod = mod
    .toLowerCase()
    .replace(/\d+%?\s?/, "") // Remove numbers and % sign
    .replace(/\(global\)/i, "") // Remove (Global)
    .trim();

  return allModsString.includes(normalizedMod);
};

// Function to filter NFTs based on selected mods
export const filterNFTsByMods = (nfts, selectedMods) => {
  if (!selectedMods.length) return nfts;

  return nfts.filter((nft) => selectedMods.every((mod) => nftHasMod(nft, mod)));
};

export const SortByMods = ({ modsFilterArray, setModList, defaultOpen }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const isModAlreadyAdded = (mod) => {
    return modsFilterArray.some((item) => item === mod);
  };

  const handleAddMod = (event) => {
    event.preventDefault();
    if (selectedValue && !isModAlreadyAdded(selectedValue)) {
      setModList([...modsFilterArray, selectedValue]);
      setSelectedValue("");
    }
  };

  const handleRemoveMod = (mod) => {
    const updatedModList = modsFilterArray.filter((item) => item !== mod);
    setModList(updatedModList);
  };

  return (
    <SubMenu label="Mods" defaultOpen={defaultOpen}>
      {modsFilterArray.map((mod) => (
        <div
          key={mod}
          className="flex justify-between items-center p-2 text-sm hover:bg-gray-700/30"
        >
          <span
            className="truncate pr-2 pl-1 w-[250px]"
            title={mod.length > 35 ? mod : ""}
          >
            {mod}
          </span>
          <button
            onClick={() => handleRemoveMod(mod)}
            className="hover:text-red-500 flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>
      ))}
      <div
        className="flex items-center h-[58px] w-[290px] gap-1 p-1 mx-2"
        style={{
          background: `url(${boxBakgroundSelected})`,
          filter: "saturate(0.4)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
          borderCollapse: "collapse",
        }}
      >
        <select
          className="pl-1 bg-transparent w-[250px] cursor-pointer outline-none text-sm"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="">Select a mod type...</option>
          {mods.modifiers.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={handleAddMod} className="flex-shrink-0">
          <Plus size={20} />
        </button>
      </div>
    </SubMenu>
  );
};
