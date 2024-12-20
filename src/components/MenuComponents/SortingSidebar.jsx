import { Sidebar, Menu } from "react-pro-sidebar";
import { MenuCheckbox } from "./MenuCheckbox.jsx";
import { MenuSlider } from "./MenuSlider.jsx";
import { ItemCategoryClassFilter } from "./ItemCategoryClassFilter.jsx";
import { SortByMods } from "./SortByMods.jsx";
import { Expandable } from "../buttons/Expandable.jsx";
import { Input } from "../ui/Input.jsx";
import { SubMenu } from "react-pro-sidebar";
import { useNFTContext } from "../../context/NFTContext";

export const SortingSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { updateFilter, filters, resetFilters, isDefaultFilters } =
    useNFTContext();
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
        className="!absolute top-0 left-0 z-10 h-10 w-64 transition-all duration-500 ease-out block sm:hidden"
      />
      <Sidebar
        backgroundColor="#151419"
        className={`h-full top-0 left-0 z-40 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        width="300px"
        rootStyles={{
          border: "none",
          boxShadow: "0px 0px 10px 0px #000000",
        }}
      >
        <Menu menuItemStyles={menuItemStyles}>
          <div
            className="border-gray-900"
            style={{
              borderBottom: isDefaultFilters ? "2px solid #202020" : "none",
              border: isDefaultFilters ? "none" : "1px solid #6a6a6a",
            }}
          >
            <button
              onClick={resetFilters}
              style={{
                backgroundColor: isDefaultFilters ? "#1c1b21" : "#202020",
              }}
              className="w-full px-2 py-2 text-sm text-gray-300  transition-colors hover:brightness-110"
            >
              Reset All Filters
            </button>
          </div>
          <SubMenu label="Search" defaultOpen="false">
            <Input
              placeholder={"Item Name..."}
              value={filters.searchTerm}
              onChange={(e) => updateFilter("searchTerm", e.target.value)}
              className="w-[300px] h-[60px] text-md"
            />
          </SubMenu>
          <SortByMods
            modsFilterArray={filters.modsFilterArray}
            setModList={(newMods) => updateFilter("modsFilterArray", newMods)}
            defaultOpen={true}
          />
          <ItemCategoryClassFilter defaultOpen={false} />
          <MenuCheckbox
            name="Rarity"
            items={["Unique", "Rare"]}
            checked={filters.checkedRarity}
            setChecked={(newValue) => updateFilter("checkedRarity", newValue)}
            isSidebarOpen={isSidebarOpen}
            defaultOpen={false}
          />
          <MenuSlider
            name={"Level"}
            value={filters.levelFilterValue}
            setValue={(newValue) => updateFilter("levelFilterValue", newValue)}
            min={0}
            max={100}
            defaultOpen={false}
          />
          <MenuSlider
            name="Damage"
            value={filters.damageFilterValue}
            setValue={(newValue) => updateFilter("damageFilterValue", newValue)}
          />
          <MenuSlider
            name="Quality"
            value={filters.qualityFilterValue}
            setValue={(newValue) =>
              updateFilter("qualityFilterValue", newValue)
            }
            min={1}
            max={5}
          />
          <MenuSlider
            name="Range"
            value={filters.rangeFilterValue}
            setValue={(newValue) => updateFilter("rangeFilterValue", newValue)}
            min={0}
            max={10}
            step={0.1}
            defaultOpen={false}
          />
          <MenuCheckbox
            name="Damage Type"
            items={["Fire", "Cold", "Lightning", "Physical", "Aether"]}
            checked={filters.checkedDamageType}
            setChecked={(newValue) =>
              updateFilter("checkedDamageType", newValue)
            }
            isSidebarOpen={isSidebarOpen}
          />
          <MenuSlider
            name={"Attack Speed"}
            value={filters.attackSpeedFilterValue}
            setValue={(newValue) =>
              updateFilter("attackSpeedFilterValue", newValue)
            }
            min={0}
            max={3}
            step={0.1}
            defaultOpen={false}
          />
          <MenuSlider
            name="Level Requirement"
            value={filters.levelRequirementFilterValue}
            setValue={(newValue) =>
              updateFilter("levelRequirementFilterValue", newValue)
            }
          />
        </Menu>
      </Sidebar>
    </div>
  );
};
