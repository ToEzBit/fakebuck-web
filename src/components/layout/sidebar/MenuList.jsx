import React from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
const menu = [
  {
    title: "Request Friends",
    to: "/friend/request",
    icon: "fa-solid fa-user-check",
  },
  {
    title: "Suggestion",
    to: "/friend/suggestion",
    icon: "fa-solid fa-user-plus",
  },
  {
    title: "All Friends",
    to: "/friend",
    icon: "fa-solid fa-user-group",
  },
];
function MenuList() {
  const { pathname } = useLocation();
  return (
    <ul className="px-2">
      {menu.map((el, idx) => (
        <MenuItem
          key={idx}
          title={el.title}
          to={el.to}
          icon={el.icon}
          active={pathname === el.to}
        />
      ))}
    </ul>
  );
}

export default MenuList;
