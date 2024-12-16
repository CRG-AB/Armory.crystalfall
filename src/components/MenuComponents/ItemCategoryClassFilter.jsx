import React, { useEffect, useState } from "react";

import { SubMenu } from "react-pro-sidebar";
import { Checkbox } from "../buttons/Checkbox";
import { useNFTContext } from "../../context/NFTContext";
export const ItemCategoryClassFilter = ({ isSidebarOpen, defaultOpen }) => {
  const { updateFilter, filters } = useNFTContext();

  return (
    <SubMenu label="Categories" defaultOpen={defaultOpen}>
      {/* SKILL */}
      <Checkbox
        name="Skill"
        checked={filters.activeCategoryClassFilters.category.Skill}
        onChange={() =>
          updateFilter("activeCategoryClassFilters", {
            ...filters.activeCategoryClassFilters,
            category: {
              ...filters.activeCategoryClassFilters.category,
              Skill: !filters.activeCategoryClassFilters.category.Skill,
            },
          })
        }
      />
      {/* ARMOR */}
      <Checkbox
        name="Armor"
        onChange={() => {
          updateFilter("activeCategoryClassFilters", {
            ...filters.activeCategoryClassFilters,
            category: {
              ...filters.activeCategoryClassFilters.category,
              Armor: !filters.activeCategoryClassFilters.category.Armor,
            },
          });
        }}
        checked={filters.activeCategoryClassFilters.category.Armor}
      />
      {filters.activeCategoryClassFilters.category.Armor && (
        <>
          <Checkbox
            name="Body Armor"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  BodyArmour:
                    !filters.activeCategoryClassFilters.itemClass.BodyArmour,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.BodyArmour}
            level={1}
          />
          <Checkbox
            name="Boots"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Boots: !filters.activeCategoryClassFilters.itemClass.Boots,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Boots}
            level={1}
          />
          <Checkbox
            name="Gloves"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Gloves: !filters.activeCategoryClassFilters.itemClass.Gloves,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Gloves}
            level={1}
          />
          <Checkbox
            name="Helmet"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Helmet: !filters.activeCategoryClassFilters.itemClass.Helmet,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Helmet}
            level={1}
          />
          <Checkbox
            name="Cape"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Cape: !filters.activeCategoryClassFilters.itemClass.Cape,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Cape}
            level={1}
          />
        </>
      )}
      {/* WEAPON */}
      <Checkbox
        name="Weapon"
        onChange={() => {
          updateFilter("activeCategoryClassFilters", {
            ...filters.activeCategoryClassFilters,
            category: {
              ...filters.activeCategoryClassFilters.category,
              Weapon: !filters.activeCategoryClassFilters.category.Weapon,
            },
          });
        }}
        checked={filters.activeCategoryClassFilters.category.Weapon}
      />
      {filters.activeCategoryClassFilters.category.Weapon && (
        <>
          <Checkbox
            name="Melee"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                subCategory: {
                  ...filters.activeCategoryClassFilters.subCategory,
                  Melee: !filters.activeCategoryClassFilters.subCategory.Melee,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.subCategory.Melee}
            level={1}
          />
          {filters.activeCategoryClassFilters.subCategory.Melee && (
            <>
              <Checkbox
                name="Axe"
                onChange={() => {
                  updateFilter("activeCategoryClassFilters", {
                    ...filters.activeCategoryClassFilters,
                    itemClass: {
                      ...filters.activeCategoryClassFilters.itemClass,
                      Axe: !filters.activeCategoryClassFilters.itemClass.Axe,
                    },
                  });
                }}
                checked={filters.activeCategoryClassFilters.itemClass.Axe}
                level={2}
              />
              {filters.activeCategoryClassFilters.itemClass.Axe && (
                <>
                  <Checkbox
                    name="1h"
                    onChange={() => {
                      updateFilter("activeCategoryClassFilters", {
                        ...filters.activeCategoryClassFilters,
                        subClass: {
                          ...filters.activeCategoryClassFilters.subClass,
                          axe1h:
                            !filters.activeCategoryClassFilters.subClass.axe1h,
                        },
                      });
                    }}
                    checked={filters.activeCategoryClassFilters.subClass.axe1h}
                    level={3}
                  />
                  <Checkbox
                    name="2h"
                    onChange={() => {
                      updateFilter("activeCategoryClassFilters", {
                        ...filters.activeCategoryClassFilters,
                        subClass: {
                          ...filters.activeCategoryClassFilters.subClass,
                          axe2h:
                            !filters.activeCategoryClassFilters.subClass.axe2h,
                        },
                      });
                    }}
                    checked={filters.activeCategoryClassFilters.subClass.axe2h}
                    level={3}
                  />
                </>
              )}
              <Checkbox
                name="Dagger"
                onChange={() => {
                  updateFilter("activeCategoryClassFilters", {
                    ...filters.activeCategoryClassFilters,
                    itemClass: {
                      ...filters.activeCategoryClassFilters.itemClass,
                      Dagger:
                        !filters.activeCategoryClassFilters.itemClass.Dagger,
                    },
                  });
                }}
                checked={filters.activeCategoryClassFilters.itemClass.Dagger}
                level={2}
              />
              <Checkbox
                name="Mace"
                onChange={() => {
                  updateFilter("activeCategoryClassFilters", {
                    ...filters.activeCategoryClassFilters,
                    itemClass: {
                      ...filters.activeCategoryClassFilters.itemClass,
                      Mace: !filters.activeCategoryClassFilters.itemClass.Mace,
                    },
                  });
                }}
                checked={filters.activeCategoryClassFilters.itemClass.Mace}
                level={2}
              />
              {filters.activeCategoryClassFilters.itemClass.Mace && (
                <>
                  <Checkbox
                    name="1h"
                    onChange={() => {
                      updateFilter("activeCategoryClassFilters", {
                        ...filters.activeCategoryClassFilters,
                        subClass: {
                          ...filters.activeCategoryClassFilters.subClass,
                          mace1h:
                            !filters.activeCategoryClassFilters.subClass.mace1h,
                        },
                      });
                    }}
                    checked={filters.activeCategoryClassFilters.subClass.mace1h}
                    level={3}
                  />
                  <Checkbox
                    name="2h"
                    onChange={() => {
                      updateFilter("activeCategoryClassFilters", {
                        ...filters.activeCategoryClassFilters,
                        subClass: {
                          ...filters.activeCategoryClassFilters.subClass,
                          mace2h:
                            !filters.activeCategoryClassFilters.subClass.mace2h,
                        },
                      });
                    }}
                    checked={filters.activeCategoryClassFilters.subClass.mace2h}
                    level={3}
                  />
                </>
              )}
              <Checkbox
                name="Sword"
                onChange={() => {
                  updateFilter("activeCategoryClassFilters", {
                    ...filters.activeCategoryClassFilters,
                    itemClass: {
                      ...filters.activeCategoryClassFilters.itemClass,
                      Sword:
                        !filters.activeCategoryClassFilters.itemClass.Sword,
                    },
                  });
                }}
                checked={filters.activeCategoryClassFilters.itemClass.Sword}
                level={2}
              />
              {filters.activeCategoryClassFilters.itemClass.Sword && (
                <>
                  <Checkbox
                    name="1h"
                    onChange={() => {
                      updateFilter("activeCategoryClassFilters", {
                        ...filters.activeCategoryClassFilters,
                        subClass: {
                          ...filters.activeCategoryClassFilters.subClass,
                          sword1h:
                            !filters.activeCategoryClassFilters.subClass
                              .sword1h,
                        },
                      });
                    }}
                    checked={
                      filters.activeCategoryClassFilters.subClass.sword1h
                    }
                    level={3}
                  />
                  <Checkbox
                    name="2h"
                    onChange={() => {
                      updateFilter("activeCategoryClassFilters", {
                        ...filters.activeCategoryClassFilters,
                        subClass: {
                          ...filters.activeCategoryClassFilters.subClass,
                          sword2h:
                            !filters.activeCategoryClassFilters.subClass
                              .sword2h,
                        },
                      });
                    }}
                    checked={
                      filters.activeCategoryClassFilters.subClass.sword2h
                    }
                    level={3}
                  />
                </>
              )}
            </>
          )}
          <Checkbox
            name="Ranged"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                subCategory: {
                  ...filters.activeCategoryClassFilters.subCategory,
                  Ranged:
                    !filters.activeCategoryClassFilters.subCategory.Ranged,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.subCategory.Ranged}
            level={1}
          />
          {filters.activeCategoryClassFilters.subCategory.Ranged && (
            <>
              <Checkbox
                name="Pistol"
                onChange={() => {
                  updateFilter("activeCategoryClassFilters", {
                    ...filters.activeCategoryClassFilters,
                    itemClass: {
                      ...filters.activeCategoryClassFilters.itemClass,
                      Pistol:
                        !filters.activeCategoryClassFilters.itemClass.Pistol,
                    },
                  });
                }}
                checked={filters.activeCategoryClassFilters.itemClass.Pistol}
                level={2}
              />
              <Checkbox
                name="Rifle"
                onChange={() => {
                  updateFilter("activeCategoryClassFilters", {
                    ...filters.activeCategoryClassFilters,
                    itemClass: {
                      ...filters.activeCategoryClassFilters.itemClass,
                      Rifle:
                        !filters.activeCategoryClassFilters.itemClass.Rifle,
                    },
                  });
                }}
                checked={filters.activeCategoryClassFilters.itemClass.Rifle}
                level={2}
              />
              <Checkbox
                name="Shotgun"
                onChange={() => {
                  updateFilter("activeCategoryClassFilters", {
                    ...filters.activeCategoryClassFilters,
                    itemClass: {
                      ...filters.activeCategoryClassFilters.itemClass,
                      Shotgun:
                        !filters.activeCategoryClassFilters.itemClass.Shotgun,
                    },
                  });
                }}
                checked={filters.activeCategoryClassFilters.itemClass.Shotgun}
                level={2}
              />
            </>
          )}
        </>
      )}
      {/* OFF-HAND */}
      <Checkbox
        name="Off-Hand"
        onChange={() => {
          updateFilter("activeCategoryClassFilters", {
            ...filters.activeCategoryClassFilters,
            category: {
              ...filters.activeCategoryClassFilters.category,
              OffHand: !filters.activeCategoryClassFilters.category.OffHand,
            },
          });
        }}
        checked={filters.activeCategoryClassFilters.category.OffHand}
      />
      {filters.activeCategoryClassFilters.category.OffHand && (
        <>
          <Checkbox
            name="Shield"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Shield: !filters.activeCategoryClassFilters.itemClass.Shield,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Shield}
            level={1}
          />
          <Checkbox
            name="Codex"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Codex: !filters.activeCategoryClassFilters.itemClass.Codex,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Codex}
            level={1}
          />
        </>
      )}
      {/* JEWELRY */}
      <Checkbox
        name="Jewelry"
        onChange={() => {
          updateFilter("activeCategoryClassFilters", {
            ...filters.activeCategoryClassFilters,
            category: {
              ...filters.activeCategoryClassFilters.category,
              Jewelry: !filters.activeCategoryClassFilters.category.Jewelry,
            },
          });
        }}
        checked={filters.activeCategoryClassFilters.category.Jewelry}
      />
      {filters.activeCategoryClassFilters.category.Jewelry && (
        <>
          <Checkbox
            name="Ring"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Ring: !filters.activeCategoryClassFilters.itemClass.Ring,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Ring}
            level={1}
          />
          <Checkbox
            name="Amulet"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Amulet: !filters.activeCategoryClassFilters.itemClass.Amulet,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Amulet}
            level={1}
          />
          <Checkbox
            name="Bracelet"
            onChange={() => {
              updateFilter("activeCategoryClassFilters", {
                ...filters.activeCategoryClassFilters,
                itemClass: {
                  ...filters.activeCategoryClassFilters.itemClass,
                  Bracelet:
                    !filters.activeCategoryClassFilters.itemClass.Bracelet,
                },
              });
            }}
            checked={filters.activeCategoryClassFilters.itemClass.Bracelet}
            level={1}
          />
        </>
      )}
    </SubMenu>
  );
};
