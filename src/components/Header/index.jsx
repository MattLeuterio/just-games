import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { HamburgerMenu, Image, HeaderMenu, MobileMenu } from "../../atoms";
import logo from "../../ui/assets/img/logo.png";
import { Search as SearchIcon } from "react-ionicons";
import { ActionContainer, Container } from "./style";
import { selectMenuMain } from "../../features/menuElements/menuElementsSlice";
import Roboto from "../../ui/typography/roboto";

const Header = ({ mediaIsDesktop }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const menuElements = useSelector(selectMenuMain);

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.pageYOffset);
    };
  });

  return (
    <>
      {!mediaIsDesktop && (
        <MobileMenu open={mobileMenuVisibility}>
          {menuElements.map((menuElm) => (
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
        <Image src={logo} width={162} alt="logo Just Games" />
        {mediaIsDesktop && <HeaderMenu />}
        <ActionContainer>
          <SearchIcon color={"#eceaef"} width="35px" height="35px" />
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
