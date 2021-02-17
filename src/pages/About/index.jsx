import React from "react";

import { Container } from "./style";
import Helvetica from "../../ui/typography/helvetica";
import { CircleProgressBar, HelmetMeta } from "../../atoms";

const About = () => {
  return (
    <Container>
      <HelmetMeta titlePage="Just Games - About" path="/about" />
      <Helvetica type="pageTitleSub">About</Helvetica>
      <CircleProgressBar vote={79} />
    </Container>
  );
};

export default About;
