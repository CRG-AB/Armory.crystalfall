import { useState } from "react";
import removeCursor from "../../img/buttons/removeCursor.webp";

export const ModButton = ({ mod, handleRemoveMod }) => {
  return (
    <div
      key={mod.mod}
      onClick={() => {
        handleRemoveMod(mod.mod);
      }}
      className={`grid grid-cols-5 h-12 text-xs overflow-auto break-all items-center justify-center`}
      style={{
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        borderCollapse: "collapse",
        cursor: `url(${removeCursor}), auto`,
      }}
    >
      <div className="col-span-3 border-r border-grey p-2">{mod.mod}</div>
      <div className="border-r border-grey p-2">{mod.min}</div>
      <div className="p-2">{mod.max}</div>
    </div>
  );
};
