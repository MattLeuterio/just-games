import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import {
  JumboBg,
  JumbotronContainer,
  NewGames,
  Quote,
  QuoteAuthor,
  QuoteText,
  TitleNewGames,
} from "./style";
import { getNew, selectNew } from "../../features/listGames/listGamesSlice";
import { selectQuote } from "../../features/quoteJumbotron/quoteJumbotronSlice";
import { getRandomInt } from "../../utils";
import { CardGame } from "..";
import BackgroundHome from "../../ui/assets/img/home-bg.jpg";

const Jumbotron = ({ type, background = BackgroundHome }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNew());
  }, [dispatch]);

  const quotes = useSelector(selectQuote);
  const randomQuote = getRandomInt(0, quotes?.length - 1);

  const listNewGame = useSelector(selectNew);

  return (
    <JumbotronContainer>
      <Quote>
        <QuoteText type="quote">{quotes[randomQuote].text}</QuoteText>
        <QuoteAuthor type="mobileMenuElements">
          - {quotes[randomQuote].author}
        </QuoteAuthor>
      </Quote>
      <NewGames>
        <TitleNewGames>New Games</TitleNewGames>
        {listNewGame.map((game) => (
          <CardGame
            key={game.slug}
            path={game.slug}
            title={game.name}
            category={game.category}
            vote={game.metacritic}
            platform={game.platforms[0].platform.name}
            cover={game.background_image}
            highlight
          />
        ))}
      </NewGames>
      <JumboBg background={background} />
    </JumbotronContainer>
  );
};

Jumbotron.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  platform: PropTypes.string,
  vote: PropTypes.number,
  highlight: PropTypes.bool,
};

export default Jumbotron;
