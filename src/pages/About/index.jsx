import React from "react";

import { Container } from "./style";
import Roboto from "../../ui/typography/roboto";
import { CircleProgressBar, HelmetMeta } from "../../atoms";

const About = () => {
  return (
    <Container>
      <HelmetMeta titlePage="Just Games - About" path="/about" />
      <Roboto type="pageTitleSub">About</Roboto>
      <CircleProgressBar vote={79} />
    </Container>
  );
};

export default About;
