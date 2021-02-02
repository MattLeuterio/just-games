import React from "react";

import { Container } from "./style";
import Roboto from "../../ui/typography/roboto";

const Category = () => {
  const locationString = window.location.pathname.replace("/", "");

  console.log(locationString);
  return (
    <Container>
      <Roboto type="pageTitleSub">{locationString}</Roboto>
    </Container>
  );
};

export default Category;
