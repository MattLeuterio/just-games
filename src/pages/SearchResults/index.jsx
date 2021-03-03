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
} from "../../features/search/searchSlice";
import Background from "../../ui/assets/img/search-page-bg.png";
import { HelmetMeta } from "../../atoms";

//Material/UI
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SearchResults = () => {
  const [page, setPage] = useState(1);
  const [platform, setPlatform] = useState(null);
  const [genre, setGenre] = useState(null);
  const locationString = window.location.pathname.replace("/search/", "");
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    colorLight: {
      color: "#eceaef",
    },
  }));

  const classes = useStyles();

  const handleChangePlatform = (val) => {
    console.log(val)
    setPlatform(val);
  };

  useEffect(() => {
    const params = {
      text: locationString,
      page: page,
      platform: platform,
      genre: genre,
    };
    dispatch(getSearchResults(params));
    dispatch(getPlatformsList());
  }, [dispatch, genre, locationString, page, platform]);

  const results = useSelector(selectSearchResults);
  const platforms = useSelector(selectPlatforms);

  console.log(platforms);

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
      {results?.count > 0 && (
        <>
          <Filters>
            <FilterSelect 
              value={platform} 
              onChange={handleChangePlatform} 
              label="Platform" 
              list={platforms} 
            />
          </Filters>
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
                clipHover={
                  game?.clip?.clip !== undefined ? game?.clip.clip : ""
                }
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
        </>
      )}
    </Container>
  );
};

export default SearchResults;
