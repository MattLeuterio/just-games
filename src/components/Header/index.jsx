import React, { useState, useEffect } from "react";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { HeaderMenu, MobileMenu } from "..";
import { HamburgerMenu, Image } from "../../atoms";
import logo from "../../ui/assets/img/logo.png";
import { Search as SearchIcon } from "react-ionicons";
import { ActionContainer, Container } from "./style";

const Header = ({ mediaIsDesktop }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.pageYOffset);
    };
  });

  return (
    <>
      {!mediaIsDesktop && <MobileMenu open={mobileMenuVisibility} />}
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
