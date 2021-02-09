import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";

import {
  Container,
  GameHeader,
  GameTitle,
  Genres,
  GenrePill,
  GameName,
  GameDevs,
  Vote,
  RowInfo,
  About,
  Info,
  SectionTitle,
  InfoTitle,
  InfoContainer,
  InfoGame,
  InformationRow,
  NameInfo,
  ResultInfo,
  Media,
  MediaHeader,
  NavMedia,
  CarouselsContainer,
  VideoContainer,
} from "./style";
import {
  getGame,
  getGameScreenshots,
  getGameSeries,
  selectGameData,
  selectGameScreenshots,
  selectGameSeries,
} from "../../features/game/gameSlice";
import { CircleProgressBar, HelmetMeta } from "../../atoms";
import { CarouselMedia, Jumbotron } from "../../components";
import Background from "../../ui/assets/img/search-page-bg.png";
import {
  DocumentTextOutline as AboutIcon,
  FilmOutline as VideoIcon,
  ImageOutline as ImageIcon,
} from "react-ionicons";
import Roboto from "../../ui/typography/roboto";

const Game = () => {
  const [selectedNavMedia, setSelectedNavMedia] = useState("images");

  const locationString = window.location.pathname.replace("/game/", "");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(locationString));
    dispatch(getGameSeries(locationString));
    dispatch(getGameScreenshots(locationString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const gameData = useSelector(selectGameData);
  const gameSeries = useSelector(selectGameSeries);
  const gameScreenshots = useSelector(selectGameScreenshots);

  return (
    <Container>
      <HelmetMeta
        titlePage={`${gameData?.name} | Just Games`}
        path={`/${gameData?.slug}`}
      />
      <Jumbotron
        type="game"
        background={
          gameData?.background_image ? gameData?.background_image : Background
        }
      >
        <GameHeader>
          <GameTitle>
            <GameName type="gamePageTitle">{gameData?.name}</GameName>
            {gameData?.developers?.map((dev) => (
              <GameDevs key={dev.id} type="gamePageDev">
                {`${dev.name} `}{" "}
              </GameDevs>
            ))}
          </GameTitle>
          <Genres>
            {gameData?.genres?.map((genre) => (
              <GenrePill key={genre.id}>{genre.name}</GenrePill>
            ))}
          </Genres>
          {gameData?.metacritic > 0 && (
            <Vote>
              <CircleProgressBar
                sizeContainer={120}
                vote={gameData?.metacritic}
              />
            </Vote>
          )}
        </GameHeader>
      </Jumbotron>
      <RowInfo>
        <About>
          <SectionTitle>
            <AboutIcon color={"#8E2DE0"} width="32px" height="32px" />
            <Roboto type="gamePageSectionTitle">About</Roboto>
          </SectionTitle>
          <Roboto>{gameData?.description_raw}</Roboto>
        </About>
        <Info>
          <InfoContainer>
            <InfoTitle>
              <Roboto type="gamePageSectionTitle">Information</Roboto>
            </InfoTitle>
            <InfoGame>
              {gameData?.platforms !== null && gameData?.platforms?.length > 0 && (
                <InformationRow>
                  <NameInfo>Platforms</NameInfo>
                  <ResultInfo>
                    {gameData?.platforms?.map((res) => (
                      <span key={res.platform.id}>{res.platform.name}</span>
                    ))}
                  </ResultInfo>
                </InformationRow>
              )}
              {gameData?.released && (
                <InformationRow>
                  <NameInfo>Release</NameInfo>
                  <ResultInfo>{gameData?.released}</ResultInfo>
                </InformationRow>
              )}
              {gameData?.developers !== null &&
                gameData?.developers?.length > 0 && (
                  <InformationRow>
                    <NameInfo>Developers</NameInfo>
                    <ResultInfo>
                      {gameData?.developers?.map((res) => (
                        <span key={res.id}>{res.name}</span>
                      ))}
                    </ResultInfo>
                  </InformationRow>
                )}
              {gameData?.publishers !== null &&
                gameData?.publishers?.length > 0 && (
                  <InformationRow>
                    <NameInfo>Publishers</NameInfo>
                    <ResultInfo>
                      {gameData?.publishers?.map((res) => (
                        <span key={res.id}>{res.name}</span>
                      ))}
                    </ResultInfo>
                  </InformationRow>
                )}
              {gameData?.website && (
                <InformationRow>
                  <NameInfo>Website</NameInfo>
                  <ResultInfo>
                    <a
                      href={gameData?.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Website
                    </a>
                  </ResultInfo>
                </InformationRow>
              )}
              {gameData?.esrb_rating && (
                <InformationRow>
                  <NameInfo>ESRB Ratings</NameInfo>
                  <ResultInfo>
                    <span>{gameData?.esrb_rating?.name}</span>
                  </ResultInfo>
                </InformationRow>
              )}
              {gameData?.tags !== null && gameData?.tags?.length > 0 && (
                <InformationRow>
                  <NameInfo>Themes</NameInfo>
                  <ResultInfo>
                    {gameData?.tags?.map((res) => (
                      <span key={res.id}>{res.name}</span>
                    ))}
                  </ResultInfo>
                </InformationRow>
              )}
              {gameData?.genres !== null && gameData?.genres?.length > 0 && (
                <InformationRow>
                  <NameInfo>Genres</NameInfo>
                  <ResultInfo>
                    {gameData?.genres?.map((res) => (
                      <span key={res.id}>{res.name}</span>
                    ))}
                  </ResultInfo>
                </InformationRow>
              )}
            </InfoGame>
          </InfoContainer>
        </Info>
      </RowInfo>
      {gameScreenshots !== null && gameScreenshots?.length > 0 && (
        <Media>
          <MediaHeader>
            <Roboto type="gamePageSectionTitle">Media</Roboto>
            <NavMedia
              selected={selectedNavMedia === "images"}
              onClick={() => setSelectedNavMedia("images")}
            >
              <ImageIcon />
            </NavMedia>
            {gameData?.clip !== null && gameData?.clip?.video !== null && (
              <NavMedia
                selected={selectedNavMedia === "video"}
                onClick={() => setSelectedNavMedia("video")}
              >
                <VideoIcon />
              </NavMedia>
            )}
          </MediaHeader>
          <CarouselsContainer>
            {selectedNavMedia === "images" ? (
              <CarouselMedia listScreenshots={gameScreenshots} />
            ) : (
              <VideoContainer>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${gameData?.clip?.video}`}
                  width="100%"
                  height="100%"
                  controls
                />
              </VideoContainer>
            )}
          </CarouselsContainer>
        </Media>
      )}

      {gameData.game_series_count > 0 &&
        gameSeries?.map((res) => (
          <NavLink key={res.slug} exact to={`${res.slug}`}>
            {res.name}
          </NavLink>
        ))}
    </Container>
  );
};

export default Game;
