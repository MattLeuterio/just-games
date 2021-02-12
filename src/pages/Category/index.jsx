import React, { useEffect, useState } from "react";

import {
  Container,
  TitlePage,
  Results,
  ButtonPagination,
  Pagination,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  getGameByGenre,
  selectGamesByGenre,
} from "../../features/listGames/listGamesSlice";
import { CardGame, Jumbotron } from "../../components";
import { selectMenuMain } from "../../features/menuElements/menuElementsSlice";
import { ChevronForwardOutline, ChevronBackOutline } from "react-ionicons";
import Roboto from "../../ui/typography/roboto";

const Category = () => {
  const [page, setPage] = useState(1);
  const locationString = window.location.pathname.replace("/genre/", "");
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      slug: locationString,
      page: page,
    };
    dispatch(getGameByGenre(params));
  }, [dispatch, locationString, page]);

  const games = useSelector(selectGamesByGenre);
  const genrePage = useSelector(selectMenuMain).filter(
    (genre) => genre.path === window.location.pathname
  )[0];

  const handleOnClickPageButton = (type) => {
    type === "next" ? setPage(page + 1) : setPage(page - 1);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Jumbotron type="genre" background={genrePage.background}>
        <TitlePage>
          {genrePage.title} <span>games</span>
          <Roboto type="h2">Page {page}</Roboto>
        </TitlePage>
      </Jumbotron>
      <Results>
        {games?.results?.map((game) => (
          <CardGame
            key={game?.slug}
            path={`/game/${game?.slug}`}
            title={game?.name}
            category={game?.category}
            vote={game?.metacritic}
            platform={game.parent_platforms}
            cover={game?.background_image}
            width="250px"
            height="320px"
          />
        ))}
      </Results>
      <Pagination>
        <ButtonPagination
          type="button"
          onClick={() => handleOnClickPageButton("prev")}
          disabled={page === 1}
        >
          <ChevronBackOutline />
        </ButtonPagination>
        <ButtonPagination onClick={() => handleOnClickPageButton("next")}>
          <ChevronForwardOutline />
        </ButtonPagination>
      </Pagination>
    </Container>
  );
};

export default Category;
