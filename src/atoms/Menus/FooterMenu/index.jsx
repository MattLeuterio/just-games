import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { MenuElements } from "./style";
import Roboto from "../../../ui/typography/roboto";
import { selectMenuFooter } from "../../../features/menuElements/menuElementsSlice";

const FooterMenu = () => {
  const footerMenuElements = useSelector(selectMenuFooter);
  return (
    <MenuElements>
      {footerMenuElements.map((menuElm) => (
        <NavLink
          key={menuElm.path}
          exact
          to={menuElm.path}
          activeClassName="menuActive"
        >
          <Roboto type="footerMenuElements">{menuElm.title}</Roboto>
        </NavLink>
      ))}
    </MenuElements>
  );
};

export default FooterMenu;
