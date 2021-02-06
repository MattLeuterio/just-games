import React from "react";
import PropTypes from "prop-types";

import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { Container, MenuElements } from "./style";

const MobileMenu = ({ children, open }) => {
  return (
    <Container open={open}>
      <MenuElements open={open}>{children}</MenuElements>
    </Container>
  );
};

MobileMenu.propTypes = {
  open: PropTypes.bool,
};

export default withMediaQueries(MobileMenu);
