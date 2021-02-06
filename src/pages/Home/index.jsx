import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeContainer } from "./style";
import { HelmetMeta } from "../../atoms";
import { CarouselGames, Jumbotron } from "../../components";
import {
  getPopular,
  getTopAdventure,
  getTopArcade,
  getTopIndie,
  getTopMOBA,
  getTopRPG,
  getTopShooter,
  getTopSport,
  selectPopular,
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
    dispatch(getPopular());
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
      <Jumbotron />
      <CarouselGames title="adventure" list={adventureList} />
      <CarouselGames title="shooter" list={shooterList} />
      <CarouselGames title="indie" list={indieList} />
      <CarouselGames title="rpg" list={rpgList} />
      <CarouselGames title="moba" list={mobaList} />
      <CarouselGames title="sport" list={sportList} />
      <CarouselGames title="arcade" list={arcadeList} />
    </HomeContainer>
  );
};

export default Home;
