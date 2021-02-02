import React from "react";

import { MenuElements, Line } from "./style";
import { NavLink } from "react-router-dom";
import Roboto from "../../ui/typography/roboto";
import { useSelector } from "react-redux";
import { selectMenuMain } from "../../features/menuElements/menuElementsSlice";

const MenuNav = () => {
  const menuElements = useSelector(selectMenuMain);
  return (
    <MenuElements>
      {menuElements.map((menuElm) => (
        <NavLink
          key={menuElm.path}
          exact
          to={menuElm.path}
          activeClassName="menuActive"
        >
          <Roboto type="headerMenuElements">{menuElm.title}</Roboto>
          {window.location.pathname === menuElm.path && <Line />}
        </NavLink>
      ))}
    </MenuElements>
  );
};

export default MenuNav;
