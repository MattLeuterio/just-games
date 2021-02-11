import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeContainer } from "./style";
import { HelmetMeta } from "../../atoms";
import { CarouselGames, Jumbotron } from "../../components";
import {
  getTopAdventure,
  getTopArcade,
  getTopIndie,
  getTopMOBA,
  getTopRPG,
  getTopShooter,
  getTopSport,
  selectTopAdventure,
  selectTopArcade,
  selectTopIndie,
  selectTopMOBA,
  selectTopRPG,
  selectTopShooter,
  selectTopSport,
} from "../../features/listGames/listGamesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const adventureList = useSelector(selectTopAdventure);
  const shooterList = useSelector(selectTopShooter);
  const indieList = useSelector(selectTopIndie);
  const rpgList = useSelector(selectTopRPG);
  const mobaList = useSelector(selectTopMOBA);
  const sportList = useSelector(selectTopSport);
  const arcadeList = useSelector(selectTopArcade);

  useEffect(() => {
    dispatch(getTopAdventure());
    dispatch(getTopShooter());
    dispatch(getTopIndie());
    dispatch(getTopRPG());
    dispatch(getTopMOBA());
    dispatch(getTopSport());
    dispatch(getTopArcade());
  }, [dispatch]);

  return (
    <HomeContainer>
      <HelmetMeta titlePage="Just Games - Home" path="/" />
      <Jumbotron type="home" />
      <CarouselGames title="adventure" basePath="game" list={adventureList} />
      <CarouselGames title="shooter" basePath="game" list={shooterList} />
      <CarouselGames title="indie" basePath="game" list={indieList} />
      <CarouselGames title="rpg" basePath="game" list={rpgList} />
      <CarouselGames title="moba" basePath="game" list={mobaList} />
      <CarouselGames title="sport" basePath="game" list={sportList} />
      <CarouselGames title="arcade" basePath="game" list={arcadeList} />
    </HomeContainer>
  );
};

export default Home;
