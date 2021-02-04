import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { CircleProgressBar } from "../../atoms";
import {
  JumboBg,
  JumbotronContainer,
  NewGames,
  Quote,
  QuoteAuthor,
  QuoteText,
  TitleNewGames,
} from "./style";
import { selectListGames } from "../../features/listGames/listGamesSlice";
import { selectQuote } from "../../features/quoteJumbotron/quoteJumbotronSlice";
import { getRandomInt } from "../../utils";
import { CardGame } from "..";
import BackgroundHome from "../../ui/assets/img/home-bg.jpg";

const Jumbotron = ({ type, background = BackgroundHome }) => {
  const [gamesList, setGamesList] = useState(useSelector(selectListGames));
  const quotes = useSelector(selectQuote);
  const randomQuote = getRandomInt(0, quotes?.length - 1);

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
        {gamesList.slice(0, 3).map((game) => (
          <CardGame
            key={game.path}
            path={game.path}
            title={game.title}
            category={game.category}
            vote={game.vote}
            platform={game.platform}
            cover={game.cover}
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
