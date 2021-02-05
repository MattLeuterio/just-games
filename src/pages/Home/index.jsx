import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { HomeContainer } from "./style";
import { HelmetMeta } from "../../atoms";
import { CarouselGames, Jumbotron } from "../../components";
import { getListGames } from "../../features/listGames/listGamesSlice";
import { getToken } from "../../features/auth/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken());
    setTimeout(() => dispatch(getListGames()), 5000);
  }, [dispatch]);

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
