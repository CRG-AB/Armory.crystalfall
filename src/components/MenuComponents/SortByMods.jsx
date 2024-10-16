import React, { useState } from "react";
import { SubMenu } from "react-pro-sidebar";
import mods from "./mods.json";
import { Plus } from "lucide-react";
import { ModButton } from "../buttons/ModButton";
import { InputNode } from "../ui/InputNode";

import boxBakgroundSelectedSmall from "../../img/ui/box-background-selected-small.webp";
import boxBakgroundSelected from "../../img/ui/box-background-selected.webp";

export const SortByMods = ({ modsFilterArray, setModList, defaultOpen }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleInput1Change = (event) => {
    if (event.target.value >= 300 || event.target.value < 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }
    setInputValue1(event.target.value);
  };

  const handleInput2Change = (event) => {
    if (event.target.value >= 300 || event.target.value < 0) {
      setError2(true);
      setTimeout(() => {
        setError2(false);
      }, 1000);
      return;
    }
    setInputValue2(event.target.value);
  };
  const isModAlreadyAdded = (mod) => {
    return modsFilterArray.some((item) => item.mod === mod);
  };

  const handleAddMod = (event) => {
    event.preventDefault();
    if (
      selectedValue &&
      !isModAlreadyAdded(selectedValue) &&
      ((inputValue1 == 0 && inputValue2 == 0) ||
        inputValue1 <= inputValue2 ||
        inputValue2 == 0)
    ) {
      const newMod = {
        mod: selectedValue,
        min: inputValue1,
        max: inputValue2,
      };
      setModList([...modsFilterArray, newMod]);
      setSelectedValue("");
      setInputValue1("");
      setInputValue2("");
    } else {
      console.log(inputValue1);
      setError(true);
      setError2(true);
      setTimeout(() => {
        setError(false);
        setError2(false);
      }, 2000);
    }
  };

  const handleRemoveMod = (mod) => {
    const updatedModList = modsFilterArray.filter((item) => item.mod !== mod);
    setModList(updatedModList);
  };

  return (
    <SubMenu label="Mods" defaultOpen={defaultOpen}>
      {modsFilterArray.length > 0 ? (
        <div
          className="grid grid-cols-5 p-1 h-[41px] text-sm mb-1 justify-center items-center"
          style={{
            background: `url(${boxBakgroundSelectedSmall})`,
            filter: "saturate(0.4)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderCollapse: "collapse",
          }}
        >
          <div className="col-span-3 pl-1">Name:</div>
          <div className="">Min</div>
          <div className="">Max</div>
        </div>
      ) : null}
      {modsFilterArray.map((mod) => (
        <ModButton key={mod.mod} mod={mod} handleRemoveMod={handleRemoveMod} />
      ))}
      <div
        className="overflow-hidden text-sm items-center h-[58px] flex justify-center gap-1 p-1"
        style={{
          background: `url(${boxBakgroundSelected})`,
          filter: "saturate(0.4)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          borderCollapse: "collapse",
        }}
      >
        <select
          className="pl-1 bg-transparent overflow-auto w-44 cursor-pointer outline-none"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          {mods.modifiers.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <InputNode
          placeholder="Min"
          h={10}
          w={10}
          min={0}
          max={300}
          type="number"
          value={inputValue1}
          onChange={handleInput1Change}
          error={error}
        />
        <InputNode
          placeholder="Max"
          h={10}
          w={10}
          min={0}
          max={300}
          type="number"
          value={inputValue2}
          onChange={handleInput2Change}
          error={error2}
        />
        <button onClick={handleAddMod}>
          <Plus />
        </button>
      </div>
    </SubMenu>
  );
};
