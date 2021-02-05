import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";

import { BadgeTop, CarouselItem, SliderRow, Title } from "./style";
import Roboto from "../../ui/typography/roboto";
import { CardGame } from "..";

const CarouselGames = ({ title = "Title", list }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(list);
  }, [list, games]);

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
        {games?.map((game) => (
          <CarouselItem key={game.slug}>
            <CardGame
              key={game.slug}
              path={`/${game.slug}`}
              title={game.name}
              category={game.category}
              vote={game.metacritic}
              platform={game.platforms[0].platform.name}
              cover={game.background_image}
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