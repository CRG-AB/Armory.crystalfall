import checkboxActive from "../../img/buttons/node/node-active.webp";
import checkboxDefault from "../../img/buttons/node/node-default.webp";
import checkboxHover from "../../img/buttons/node/node-hover.webp";

export const Checkbox = ({ checked, onChange, name, level }) => {
  return (
    <div
      className="p-2"
      onClick={onChange}
      onMouseOver={(e) => {
        e.currentTarget.firstChild.style.backgroundImage = `url(${checkboxHover})`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.firstChild.style.backgroundImage = `url(${
          checked ? checkboxActive : checkboxDefault
        })`;
      }}
    >
      <div
        className={`flex row items-center ${checked ? "active" : ""}`}
        style={{
          backgroundImage: `url(${checked ? checkboxActive : checkboxDefault})`,
          backgroundSize: "cover",
          width: "30px",
          height: "30px",
          cursor: "pointer",
          whiteSpace: "nowrap",
          marginLeft: `${level * 30}px`,
          fontWeight: `${checked ? "500" : ""}`,
          transition: "0.2s",
        }}
      >
        <p
          className="pl-12"
          style={{ color: `${checked ? "white" : "#C7C4C3"}` }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};
