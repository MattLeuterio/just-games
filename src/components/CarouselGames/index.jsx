import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";

import { BadgeTop, CarouselItem, SliderRow, Title } from "./style";
import Roboto from "../../ui/typography/roboto";
import { CardGame } from "..";

const CarouselGames = ({ title, list, basePath }) => {
  const [games, setGames] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setGames(list);
    setLoad(true);
  }, [list, games]);

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  const settings = {
    pagination: false,
    itemPadding: [0, 5, 0, 5],
    showEmptySlots: true,
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4 },
      { width: 1550, itemsToShow: 5 },
    ],
  };

  return (
    <SliderRow load={load}>
      {title !== undefined && (
        <Title>
          {title?.toLowerCase() !== "popular" && <BadgeTop>top 10</BadgeTop>}
          <Roboto type="carouselTitle">{title}</Roboto>
        </Title>
      )}
      {!!games && (
        <Carousel {...settings}>
          {games?.map((game) => (
            <CarouselItem key={game?.slug} color>
              <CardGame
                key={game?.slug}
                path={basePath ? `${basePath}/${game?.slug}` : `${game?.slug}`}
                title={game?.name}
                category={game?.category}
                vote={game?.metacritic}
                platform={game?.platforms[0]?.platform?.name}
                cover={game?.background_image}
              />
            </CarouselItem>
          ))}
        </Carousel>
      )}
    </SliderRow>
  );
};

CarouselGames.propTypes = {
  title: PropTypes.string,
};

export default CarouselGames;
