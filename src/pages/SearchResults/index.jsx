import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  TitlePage,
  Results,
  ButtonPagination,
  Pagination,
  Filters,
} from "./style";
import { CardGame, FilterSelect, Jumbotron } from "../../components";
import { ChevronForwardOutline, ChevronBackOutline } from "react-ionicons";
import Helvetica from "../../ui/typography/helvetica";
import {
  getSearchResults,
  selectSearchResults,
  getPlatformsList,
  selectPlatforms,
  selectGenres,
  getGenresList,
  selectOrder,
} from "../../features/search/searchSlice";
import Background from "../../ui/assets/img/search-page-bg.png";
import { HelmetMeta, NoResult } from "../../atoms";

const SearchResults = () => {
  const [page, setPage] = useState(1);
  const [platform, setPlatform] = useState(null);
  const [genre, setGenre] = useState(null);
  const [ordering, setOrdering] = useState(null);
  const locationString = window.location.pathname.replace("/search/", "");
  const dispatch = useDispatch();

  const handleChangePlatform = (val) => {
    setPlatform(val);
    setPage(1);
  };

  const handleChangeGenre = (val) => {
    setGenre(val);
    setPage(1);
  };

  const handleChangeOrdering = (val) => {
    setOrdering(val);
    setPage(1);
  };

  useEffect(() => {
    const params = {
      text: locationString,
      page,
      platform,
      genre,
      ordering,
    };
    dispatch(getSearchResults(params));
    dispatch(getPlatformsList());
    dispatch(getGenresList());
  }, [dispatch, genre, locationString, page, platform, ordering]);

  const results = useSelector(selectSearchResults);
  const platforms = useSelector(selectPlatforms);
  const genres = useSelector(selectGenres);
  const order = useSelector(selectOrder);

  const handleOnClickPageButton = (type) => {
    type === "next" ? setPage(page + 1) : setPage(page - 1);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <HelmetMeta
        titlePage={`${results?.count} results for ${locationString.replaceAll(
          "-",
          " "
        )} | Just Games`}
        path={`/search/${locationString}`}
        description={
          results?.count > 0
            ? results?.results[0].description_raw !== null
              ? `${results?.count} results for ${locationString.replaceAll(
                  "-",
                  " "
                )} | Just Games`
              : "no results"
            : Background
        }
        image={
          results?.count > 0
            ? results?.results[0].background_image !== null
              ? results?.results[0].background_image
              : Background
            : Background
        }
      />
      <Jumbotron
        type="genre"
        background={
          results?.count > 0
            ? results?.results[0].background_image !== null
              ? results?.results[0].background_image
              : Background
            : Background
        }
      >
        <TitlePage>
          {results?.count} results for
          <span> {locationString?.replaceAll("-", " ")}</span>
          {(results?.count || []) > 0 && (
            <Helvetica type="h2">Page {page}</Helvetica>
          )}
        </TitlePage>
      </Jumbotron>
      <Filters>
        <FilterSelect
          value={platform}
          onChange={handleChangePlatform}
          label="Platform"
          list={platforms}
        />
        <FilterSelect
          value={genre}
          onChange={handleChangeGenre}
          label="Genre"
          list={genres}
        />
        <FilterSelect
          value={ordering}
          onChange={handleChangeOrdering}
          label="Order"
          list={order}
          noSelectionLabel="Popular"
        />
      </Filters>
      <Results>
        {results?.count > 0 ? (
          <>
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
                clipHover={
                  game?.clip?.clip !== undefined ? game?.clip.clip : ""
                }
              />
            ))}
          </>
        ) : (
          <NoResult widthCtn="fit-content" />
        )}
      </Results>
      {results?.count >= 20 && (
        <Pagination>
          <ButtonPagination
            type="button"
            onClick={() => handleOnClickPageButton("prev")}
            disabled={page === 1}
          >
            <ChevronBackOutline />
          </ButtonPagination>
          <ButtonPagination
            onClick={() => handleOnClickPageButton("next")}
            disabled={results?.next === null}
          >
            <ChevronForwardOutline />
          </ButtonPagination>
        </Pagination>
      )}
    </Container>
  );
};

export default SearchResults;
