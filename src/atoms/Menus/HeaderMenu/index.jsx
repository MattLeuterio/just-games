import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { MenuElements, Line } from "./style";
import Roboto from "../../../ui/typography/roboto";
import { selectMenuMain } from "../../../features/menuElements/menuElementsSlice";

const HeaderMenu = () => {
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
          <Roboto type="headerMenuElements">
            {menuElm.title}
            {window.location.pathname === menuElm.path && <Line />}
          </Roboto>
        </NavLink>
      ))}
    </MenuElements>
  );
};

export default HeaderMenu;
