import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { HamburgerMenu, Image, HeaderMenu, MobileMenu } from "../../atoms";
import logo from "../../ui/assets/img/logo.png";
import { Search as SearchIcon } from "react-ionicons";
import { ActionContainer, Container } from "./style";
import { selectMenuMain } from "../../features/menuElements/menuElementsSlice";
import Roboto from "../../ui/typography/roboto";
import { searchModalToggle } from "../../features/modals/modalsSlice";

const Header = ({ mediaIsDesktop }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const menuElements = useSelector(selectMenuMain);

  const dispatch = useDispatch();

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.pageYOffset);
    };
  });

  return (
    <>
      {!mediaIsDesktop && (
        <MobileMenu open={mobileMenuVisibility}>
          {menuElements.slice(0, 8).map((menuElm) => (
            <NavLink
              key={menuElm.path}
              onClick={() => setMobileMenuVisibility(!mobileMenuVisibility)}
              exact
              to={menuElm.path}
              activeClassName="menuActive"
            >
              <Roboto type="mobileMenuElements">{menuElm.title}</Roboto>
            </NavLink>
          ))}
        </MobileMenu>
      )}
      <Container scroll={scrollPosition}>
        <NavLink exact to="/">
          <Image src={logo} width="162px" alt="logo Just Games" />
        </NavLink>
        {mediaIsDesktop && <HeaderMenu />}
        <ActionContainer>
          <SearchIcon
            onClick={() => dispatch(searchModalToggle())}
            color={"#eceaef"}
            width="35px"
            height="35px"
          />
          {!mediaIsDesktop && (
            <HamburgerMenu
              onClick={() => setMobileMenuVisibility(!mobileMenuVisibility)}
              open={mobileMenuVisibility}
            />
          )}
        </ActionContainer>
      </Container>
    </>
  );
};

export default withMediaQueries(Header);
