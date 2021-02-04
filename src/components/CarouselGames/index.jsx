import React, { useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";

import { BadgeTop, CarouselItem, SliderRow, Title } from "./style";
import Roboto from "../../ui/typography/roboto";
import { selectListGames } from "../../features/listGames/listGamesSlice";
import { CardGame } from "..";

const CarouselGames = ({ title = "Title" }) => {
  const [games, setGames] = useState(useSelector(selectListGames));
  const settings = {
    pagination: false,
    itemPadding: [0, 5, 0, 5],
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4 },
    ],
  };

  return (
    <SliderRow>
      <Title>
        {title.toLowerCase() !== "popular" && <BadgeTop>top 10</BadgeTop>}
        <Roboto type="carouselTitle">{title}</Roboto>
      </Title>
      <Carousel {...settings}>
        {games.map((game) => (
          <CarouselItem key={game.path}>
            <CardGame
              key={game.path}
              path={game.path}
              title={game.title}
              category={game.category}
              vote={game.vote}
              platform={game.platform}
              cover={game.cover}
            />
          </CarouselItem>
        ))}
      </Carousel>
    </SliderRow>
  );
};

CarouselGames.propTypes = {
  title: PropTypes.string,
};

export default CarouselGames;
