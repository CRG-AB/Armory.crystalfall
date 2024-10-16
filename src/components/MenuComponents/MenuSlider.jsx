import { Slider } from "@mui/material";
import { SubMenu } from "react-pro-sidebar";

import nodeDefault from "../../img/buttons/node/node-default.webp";
import nodeHover from "../../img/buttons/node/node-hover.webp";
import nodeActive from "../../img/buttons/node/node-active.webp";

{
  /* <MenuSlider
  name="Range"
  value={RangeFilterValue}
  setValue={setRangeFilterValue}
  min={0}
  max={10}
/>; 

const [RangeFilterValue, setRangeFilterValue] = useState([0, 10]);
*/
}

export const MenuSlider = ({
  name,
  value,
  setValue,
  max,
  min,
  defaultOpen,
}) => {
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <SubMenu label={name} defaultOpen={defaultOpen}>
      <div className="flex flex-col center w-full items-center overflow-hidden p-2">
        <Slider
          style={{ width: "80%", marginTop: "20px" }}
          className="w-3/4"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="on"
          sx={{
            "& .MuiSlider-thumb": {
              backgroundImage: `url(${nodeDefault})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: 30,
              height: 30,
              transition: "background-image 0.3s",
              borderRadius: 0,
              boxShadow: "none",
              color: "transparent",
              "&:hover": {
                boxShadow: "none",
                filter: "drop-shadow(0px 0px 10px rgb(71, 71, 71))",
                backgroundImage: `url(${nodeHover})`,
              },
              "&:active": {
                boxShadow: "none",
                filter: "drop-shadow(0px 0px 10px rgba(71, 71, 71, 0.867))",
                backgroundImage: `url(${nodeActive})`,
              },
            },
            "& .MuiSlider-valueLabel": {
              fontSize: 12,
              fontWeight: "bold",
              top: 0,
              backgroundColor: "unset",
              "&::before": {
                display: "none",
              },
            },
            "& .MuiSlider-thumb::before": {
              boxShadow: "none",
            },
          }}
        />
      </div>
    </SubMenu>
  );
};
