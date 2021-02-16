import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeContainer } from "./style";
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
import { HelmetMeta } from "../../atoms";

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

  // MomentJS
  const moment = require("moment");
  const now = moment().format("YYYY");
  const lastYear = moment().subtract(1, "years").format("YYYY");

  return (
    <HomeContainer>
      <HelmetMeta
        titlePage="Just Games | Home"
        path="www.justgames.com"
        description="Just Games. Find your next great game."
      />
      <Jumbotron type="home" />
      <CarouselGames
        title="adventure"
        subtitle={`${lastYear}/${now}`}
        basePath="game"
        list={adventureList}
      />
      <CarouselGames
        title="shooter"
        subtitle={`${lastYear}/${now}`}
        basePath="game"
        list={shooterList}
      />
      <CarouselGames
        title="indie"
        subtitle={`${lastYear}/${now}`}
        basePath="game"
        list={indieList}
      />
      <CarouselGames
        title="rpg"
        subtitle={`${lastYear}/${now}`}
        basePath="game"
        list={rpgList}
      />
      <CarouselGames
        title="moba"
        subtitle={`${lastYear}/${now}`}
        basePath="game"
        list={mobaList}
      />
      <CarouselGames
        title="sport"
        subtitle={`${lastYear}/${now}`}
        basePath="game"
        list={sportList}
      />
      <CarouselGames
        title="arcade"
        subtitle={`${lastYear}/${now}`}
        basePath="game"
        list={arcadeList}
      />
    </HomeContainer>
  );
};

export default Home;
