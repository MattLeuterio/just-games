import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";

import { CarouselItem, SliderRow } from "./style";
import { Image } from "../../atoms";

const CarouselMedia = ({ title = "Title", listScreenshots }) => {
  const [screenshots, setScreenshots] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setScreenshots(listScreenshots);
    setLoad(true);
  }, [listScreenshots, screenshots]);

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  const settings = {
    pagination: false,
    itemPadding: [0, 10, 0, 10],
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1 },
      { width: 850, itemsToShow: 2 },
      { width: 1150, itemsToShow: 3 },
      { width: 1550, itemsToShow: 3 },
    ],
  };

  return (
    <SliderRow load={load}>
      {!!screenshots && (
        <>
          {/* <Title>
            {title.toLowerCase() !== "popular" && <BadgeTop>top 10</BadgeTop>}
            <Roboto type="carouselTitle">{title}</Roboto>
          </Title> */}
          <Carousel {...settings}>
            {screenshots?.map((screenshot) => (
              <CarouselItem key={screenshot.id}>
                <Image width="100%" src={screenshot.image} />
              </CarouselItem>
            ))}
          </Carousel>
        </>
      )}
    </SliderRow>
  );
};

CarouselMedia.propTypes = {
  title: PropTypes.string,
};

export default CarouselMedia;
