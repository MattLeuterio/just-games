import React, { useEffect, useState } from "react";

import {
  Container,
  TitlePage,
  Results,
  ButtonPagination,
  Pagination,
  Filters,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  getGameByGenre,
  selectGamesByGenre,
} from "../../features/listGames/listGamesSlice";
import { CardGame, FilterSelect, Jumbotron } from "../../components";
import { selectMenuMain } from "../../features/menuElements/menuElementsSlice";
import { ChevronForwardOutline, ChevronBackOutline } from "react-ionicons";
import Helvetica from "../../ui/typography/helvetica";
import { HelmetMeta } from "../../atoms";
import {
  getPlatformsList,
  selectOrder,
  selectPlatforms,
} from "../../features/search/searchSlice";

const Category = () => {
  const [page, setPage] = useState(1);
  const [platform, setPlatform] = useState(null);
  const [ordering, setOrdering] = useState(null);

  const locationString = window.location.pathname.replace("/genre/", "");
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      slug: locationString,
      page,
      platform,
      ordering,
    };
    dispatch(getGameByGenre(params));
    dispatch(getPlatformsList());
  }, [dispatch, locationString, ordering, page, platform]);

  const handleChangePlatform = (val) => {
    setPlatform(val);
    setPage(1);
  };
  const handleChangeOrdering = (val) => {
    setOrdering(val);
    setPage(1);
  };

  const games = useSelector(selectGamesByGenre);
  const platforms = useSelector(selectPlatforms);
  const order = useSelector(selectOrder);

  const genrePage = useSelector(selectMenuMain).filter(
    (genre) => genre.path === window.location.pathname
  )[0];

  const handleOnClickPageButton = (type) => {
    type === "next" ? setPage(page + 1) : setPage(page - 1);
    window.scrollTo(0, 0);
  };
  return (
    <Container>
      <HelmetMeta
        titlePage={`${genrePage?.title} Games | Just Games`}
        path={`${genrePage?.path}`}
        description={genrePage?.title}
        image={genrePage?.background}
      />
      <Jumbotron type="genre" background={genrePage?.background}>
        <TitlePage>
          {genrePage?.title} <span>games</span>
          <Helvetica type="h2">Page {page}</Helvetica>
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
          value={ordering}
          onChange={handleChangeOrdering}
          label="Order"
          list={order}
          noSelectionLabel="Popular"
        />
      </Filters>
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
            clipHover=""
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
