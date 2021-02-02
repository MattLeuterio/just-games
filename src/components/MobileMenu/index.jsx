import React from "react";

import PropTypes from "prop-types";
import { withMediaQueries } from "../../hoc/withMediaQueries";

import { Container, MenuElements } from "./style";
import { useSelector } from "react-redux";
import { selectMenuMain } from "../../features/menuElements/menuElementsSlice";
import Roboto from "../../ui/typography/roboto";
import { NavLink } from "react-router-dom";

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
