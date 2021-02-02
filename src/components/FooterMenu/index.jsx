import React from "react";

import { MenuElements } from "./style";
import { NavLink } from "react-router-dom";
import Roboto from "../../ui/typography/roboto";
import { useSelector } from "react-redux";
import { selectMenuFooter } from "../../features/menuElements/menuElementsSlice";

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
