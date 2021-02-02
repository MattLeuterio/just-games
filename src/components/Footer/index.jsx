import React from "react";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { Container, Copyright, Link } from "./style";
import logo from "../../ui/assets/img/logo.png";
import { Image } from "../../atoms";
import { FooterMenu } from "..";
import { useSelector } from "react-redux";
import { selectMenuFooter } from "../../features/menuElements/menuElementsSlice";

const Footer = ({ mediaIsDesktop }) => {
  const menuSelected = useSelector(selectMenuFooter);
  return (
    <Container>
      <Image
        src={logo}
        width={mediaIsDesktop ? 321 : 241}
        alt="logo Just Games"
      />
      <FooterMenu selector={menuSelected} />
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
