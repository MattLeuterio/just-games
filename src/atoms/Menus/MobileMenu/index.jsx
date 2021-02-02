import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { Container, MenuElements } from "./style";
import { selectMenuMain } from "../../../features/menuElements/menuElementsSlice";
import Roboto from "../../../ui/typography/roboto";

const MobileMenu = ({ open }) => {
  const menuElements = useSelector(selectMenuMain);
  return (
    <Container open={open}>
      <MenuElements open={open}>
        {menuElements.map((menuElm) => (
          <NavLink
            key={menuElm.path}
            exact
            to={menuElm.path}
            activeClassName="menuActive"
          >
            <Roboto type="mobileMenuElements">{menuElm.title}</Roboto>
          </NavLink>
        ))}
      </MenuElements>
    </Container>
  );
};

MobileMenu.propTypes = {
  open: PropTypes.bool,
};

export default withMediaQueries(MobileMenu);
