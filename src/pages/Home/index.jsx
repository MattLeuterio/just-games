import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeContainer } from "./style";
import { HelmetMeta } from "../../atoms";
import { CarouselGames, Jumbotron } from "../../components";
import {
  getTopAdventure,
  selectTopAdventure,
} from "../../features/listGames/listGamesSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAdventure());
  }, [dispatch]);

  const adventureList = useSelector(selectTopAdventure);

  return (
    <HomeContainer>
      <HelmetMeta titlePage="Just Games - Home" path="/" />
      <Jumbotron />
      <CarouselGames title="popular" />
      <CarouselGames title="adventure" list={adventureList} />
      {/* <CarouselGames title="shooter" />
      <CarouselGames title="indie" />
      <CarouselGames title="rpg" />
      <CarouselGames title="moba" />
      <CarouselGames title="sport" />
      <CarouselGames title="simulator" /> */}
    </HomeContainer>
  );
};

export default Home;
