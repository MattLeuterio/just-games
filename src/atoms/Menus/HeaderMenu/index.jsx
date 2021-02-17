import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { MenuElements, Line } from "./style";
import Helvetica from "../../../ui/typography/helvetica";
import { selectMenuMain } from "../../../features/menuElements/menuElementsSlice";

const HeaderMenu = () => {
  const menuElements = useSelector(selectMenuMain);
  return (
    <MenuElements>
      {menuElements.slice(0, 8).map((menuElm) => (
        <NavLink
          key={menuElm.path}
          exact
          to={menuElm.path}
          activeClassName="menuActive"
        >
          <Helvetica type="headerMenuElements">
            {menuElm.title}
            {window.location.pathname === menuElm.path && <Line />}
          </Helvetica>
        </NavLink>
      ))}
    </MenuElements>
  );
};

export default HeaderMenu;
