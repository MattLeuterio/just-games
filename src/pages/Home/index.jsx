import React, { useState } from "react";

import {
  HomeContainer,
  JumboBg,
  Jumbotron,
  NewGames,
  Quote,
  QuoteAuthor,
  QuoteText,
  TitleNewGames,
} from "./style";
import { HelmetMeta } from "../../atoms";
import { CardGame } from "../../components";
import { getRandomInt } from "../../utils";

const games = [
  {
    path: "/the-last-of-us",
    title: "The Last of Us",
    category: "Sport",
    platform: "Playstation 3",
    vote: 91,
  },
  {
    path: "/the-last-of-us",
    title: "The Last of Us",
    category: "Sport",
    platform: "Playstation 3",
    vote: 91,
  },
  {
    path: "/the-last-of-us",
    title: "The Last of Us",
    category: "Sport",
    platform: "Playstation 3",
    vote: 91,
  },
];

const Home = () => {
  const [gamesList, setGamesList] = useState(games);
  const quotes = [
    {
      text:
        "There are plenty of skills I've learned from playing video games. It's more interactive than watching TV, because there are problems to solve as you're using your brain.",
      author: "Shaun White",
    },
    {
      text:
        "Some people say video games rot your brain, but I think they work different muscles that maybe you don't normally use.",
      author: "Ezra Koenig",
    },
    {
      text:
        "Video games are bad for you? That's what they said about rock-n-roll.",
      author: "Shigeru Miyamoto",
    },
    {
      text:
        "Playing video games is something I enjoy in my spare time. I'm a gamer, always have been.",
      author: "Kevin Garnett",
    },
  ];
  const randomQuote = getRandomInt(0, quotes.length - 1);

  return (
    <HomeContainer>
      <HelmetMeta titlePage="Just Games - Home" path="/" />
      <Jumbotron>
        <Quote>
          <QuoteText type="quote">{quotes[randomQuote].text}</QuoteText>
          <QuoteAuthor type="mobileMenuElements">
            - {quotes[randomQuote].author}
          </QuoteAuthor>
        </Quote>
        <NewGames>
          <TitleNewGames>New Games</TitleNewGames>
          {gamesList.map((game, index) => (
            <CardGame
              key={index}
              path={game.path}
              title={game.title}
              category={game.category}
              vote={game.vote}
              platform={game.platform}
              highlight
            />
          ))}
        </NewGames>
        <JumboBg />
      </Jumbotron>
    </HomeContainer>
  );
};

export default Home;
