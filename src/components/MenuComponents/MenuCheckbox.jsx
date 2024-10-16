import { Checkbox } from "../buttons/Checkbox";
import { SubMenu } from "react-pro-sidebar";

{
  /* <MenuCheckbox
              name="Rarity"
              items={["Legendary", "Rare"]}
              checked={checkedRarity}
              setChecked={setCheckedRarity}
            />

const [checkedDamageType, setCheckedDamageType] = useState({
  fire: false,
  ice: false,
  lightning: false,
  physical: false,
}); */
}

export const MenuCheckbox = ({
  items,
  checked,
  setChecked,
  name,
  defaultOpen,
}) => {
  const onChange = (item) => {
    setChecked({ ...checked, [item]: !checked[item] });
  };

  return (
    <SubMenu label={name} defaultOpen={defaultOpen}>
      {items.map((item, i) => (
        <Checkbox
          checked={checked[item]}
          onChange={() => onChange(item)}
          name={item}
          key={i}
        />
      ))}
    </SubMenu>
  );
};
