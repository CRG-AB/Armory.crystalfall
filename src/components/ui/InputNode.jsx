import nodeDefault from "../../img/buttons/node/node-default1.webp";
import nodeHover from "../../img/buttons/node/node-hover1.webp";
import nodeActive from "../../img/buttons/node/node-active1.webp";
import nodeError from "../../img/buttons/node/node-error1.webp";

import { useState } from "react";

export const InputNode = ({ placeholder, value, onChange, h, w, error }) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = (e) => {
    setIsHovered(true);
  };

  const onMouseLeave = (e) => {
    setIsHovered(false);
  };

  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      placeholder={placeholder}
      className={`bg-transparent appearance-none outline-none text-xs text-center no-spinner h-${h} w-${w} bg-cover transition-all duration-200`}
      style={{
        backgroundImage: error
          ? `url(${nodeError})`
          : isFocused
          ? `url(${nodeActive})`
          : isHovered
          ? `url(${nodeHover})`
          : `url(${nodeDefault})`,
      }}
      min={0}
      max={300}
      type="number"
      value={value}
      onChange={onChange}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onError={(e) => console.log(e)}
    />
  );
};
