import React from "react";

import { Circle, CircleWrapper, Container, Percent, Vote } from "./style";
import Roboto from "../../ui/typography/roboto";
import { HelmetMeta } from "../../atoms";

const About = () => {
  const voteGame = () => {
    return (
      <Percent>
        <CircleWrapper>
          <Circle cx="70" cy="70" r="70"></Circle>
          <Circle cx="70" cy="70" r="70"></Circle>
        </CircleWrapper>
        <Vote>8.7</Vote>
      </Percent>
    );
  };

  return (
    <Container>
      <HelmetMeta titlePage="Just Games - About" path="/about" />
      <Roboto type="pageTitleSub">About</Roboto>
      {voteGame()}
    </Container>
  );
};

export default About;
