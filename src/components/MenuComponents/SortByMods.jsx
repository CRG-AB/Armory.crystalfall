import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { SubMenu } from "react-pro-sidebar";
import mods from "./mods.json";
import { Plus, X, ChevronDown } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = (event) => {
      // If the scroll event is from the dropdown itself, don't close it
      if (dropdownRef.current?.contains(event.target)) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll, true);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
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

  const renderDropdown = () => {
    if (!isOpen || !buttonRef.current) return null;

    const buttonRect = buttonRef.current.getBoundingClientRect();

    return createPortal(
      <div
        ref={dropdownRef}
        className="fixed z-[9999] w-[290px] overflow-auto bg-[#1c1b21] max-h-[300px] rounded-sm shadow-lg"
        style={{
          top: buttonRect.bottom + 4,
          left: buttonRect.left,
        }}
      >
        {mods.modifiers.map((option) => (
          <button
            key={option}
            className="w-full text-left py-2 pl-3 pr-9 cursor-pointer text-gray-300 hover:bg-gray-700/30 hover:text-white"
            onClick={() => handleSelect(option)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleSelect(option);
              }
            }}
            tabIndex={0}
          >
            {option}
          </button>
        ))}
      </div>,
      document.body
    );
  };

  return (
    <SubMenu label="Mods" defaultOpen={defaultOpen}>
      {modsFilterArray.map((mod) => (
        <button
          key={mod}
          className="flex justify-between items-center p-2 text-sm hover:bg-gray-700/30 w-full"
          onClick={() => handleRemoveMod(mod)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleRemoveMod(mod);
            }
          }}
          tabIndex={0}
        >
          <span
            className="truncate pr-2 pl-1 w-[250px]"
            title={mod.length > 35 ? mod : ""}
          >
            {mod}
          </span>
          <X size={16} />
        </button>
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
        <button
          ref={buttonRef}
          className="relative w-[250px] pl-1 pr-8 py-2 text-left bg-transparent text-gray-300 text-sm cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <span className="block truncate">
            {selectedValue || "Select a mod type..."}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </span>
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleAddMod(e);
          }} 
          className="flex-shrink-0 text-gray-300 hover:text-white"
        >
          <Plus size={20} />
        </button>
      </div>
      {renderDropdown()}
    </SubMenu>
  );
};
