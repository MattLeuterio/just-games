import React from "react";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { Container, Copyright, Link } from "./style";
import logo from "../../ui/assets/img/logo.png";
import { Image } from "../../atoms";
import { NavLink } from "react-router-dom";

const Footer = ({ mediaIsDesktop }) => {
  return (
    <Container>
      <NavLink exact to="/">
        <Image src={logo} width="100px" alt="logo Just Games" />
      </NavLink>
      <Copyright>
        Made by{" "}
        <Link href="https://www.mattleuterio.dev" target="_blank">
          mattleuterio.dev
        </Link>{" "}
      </Copyright>
    </Container>
  );
};

export default withMediaQueries(Footer);
