import React from "react";

import { HomeContainer } from "./style";
import { HelmetMeta } from "../../atoms";
import { CarouselGames, Jumbotron } from "../../components";

const Home = () => {
  return (
    <HomeContainer>
      <HelmetMeta titlePage="Just Games - Home" path="/" />
      <Jumbotron />
      <CarouselGames title="popular" />
      <CarouselGames title="adventure" />
      <CarouselGames title="shooter" />
      <CarouselGames title="indie" />
      <CarouselGames title="rpg" />
      <CarouselGames title="moba" />
      <CarouselGames title="sport" />
      <CarouselGames title="simulator" />
    </HomeContainer>
  );
};

export default Home;
