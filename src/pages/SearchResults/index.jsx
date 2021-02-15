import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  TitlePage,
  Results,
  ButtonPagination,
  Pagination,
} from "./style";
import { CardGame, Jumbotron } from "../../components";
import { ChevronForwardOutline, ChevronBackOutline } from "react-ionicons";
import Roboto from "../../ui/typography/roboto";
import {
  getSearchResults,
  selectSearchResults,
} from "../../features/search/searchSlice";
import Background from "../../ui/assets/img/search-page-bg.png";

const SearchResults = () => {
  const [page, setPage] = useState(1);
  const locationString = window.location.pathname.replace("/search/", "");
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      text: locationString,
      page: page,
    };
    dispatch(getSearchResults(params));
  }, [dispatch, locationString, page]);

  const results = useSelector(selectSearchResults);

  const handleOnClickPageButton = (type) => {
    type === "next" ? setPage(page + 1) : setPage(page - 1);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Jumbotron
        type="genre"
        background={
          results?.count > 0 ? results?.results[0].background_image : Background
        }
      >
        <TitlePage>
          {results?.count} results for
          <span> {locationString.replaceAll("-", " ")}</span>
          <Roboto type="h2">Page {page}</Roboto>
        </TitlePage>
      </Jumbotron>
      <Results>
        {results?.results?.map((game) => (
          <CardGame
            key={game?.slug}
            path={`/game/${game?.slug}`}
            title={game?.name}
            category={game?.category}
            vote={game?.metacritic}
            platform={game.parent_platforms}
            cover={game?.background_image}
            width="320px"
            height="200px"
            clipHover={game?.clip?.clip !== undefined ? game?.clip.clip : ""}
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

export default SearchResults;
