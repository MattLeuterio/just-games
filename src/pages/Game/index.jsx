import React, { useEffect, useState } from "react";
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
  Row,
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
  StoresList,
  LinkStore,
  ShareButtons,
  Series,
  SectionContainer,
} from "./style";
import {
  getGame,
  getGameScreenshots,
  getGameSeries,
  selectGameData,
  selectGameScreenshots,
  selectGameSeries,
} from "../../features/game/gameSlice";
import { CircleProgressBar, HelmetMeta, NoResult } from "../../atoms";
import { CarouselGames, CarouselMedia, Jumbotron } from "../../components";
import Helvetica from "../../ui/typography/helvetica";
import Background from "../../ui/assets/img/search-page-bg.png";
import {
  DocumentTextOutline as AboutIcon,
  FilmOutline as VideoIcon,
  ImageOutline as ImageIcon,
  StorefrontOutline as StoresIcon,
  ShareSocial as ShareIcon,
  GameControllerOutline as SeriesIcon,
} from "react-ionicons";
import { storesSwitch } from "../../utils";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";
import { Link } from "react-router-dom";

const Game = () => {
  const [selectedNavMedia, setSelectedNavMedia] = useState("images");

  const locationString = window.location.pathname.replace("/game/", "");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(locationString));
    dispatch(getGameScreenshots(locationString));
    dispatch(getGameSeries(locationString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const gameData = useSelector(selectGameData);
  const gameScreenshots = useSelector(selectGameScreenshots);
  const gameSeries = useSelector(selectGameSeries);

  return (
    <>
      <HelmetMeta
        titlePage={`${gameData?.name} | Just Games`}
        path={`/game/${gameData?.slug}`}
        description={gameData?.description_raw}
        image={`${gameData?.background_image}`}
      />
      <Container>
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
                <Link
                  key={genre?.id}
                  to={{
                    pathname: `/genre/${genre?.slug}`,
                  }}
                >
                  <GenrePill>{genre?.name}</GenrePill>
                </Link>
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
        <Row>
          <SectionContainer>
            <SectionTitle>
              <AboutIcon color={"#8E2DE0"} width="32px" height="32px" />
              <Helvetica type="gamePageSectionTitle">About</Helvetica>
            </SectionTitle>
            <Helvetica>
              {gameData?.description_raw !== "" ? (
                gameData?.description_raw
              ) : (
                <NoResult text="No description" />
              )}
            </Helvetica>
          </SectionContainer>
          <SectionContainer>
            <InfoContainer>
              <InfoTitle>
                <Helvetica type="gamePageSectionTitle">Information</Helvetica>
              </InfoTitle>
              <InfoGame>
                {gameData?.platforms !== null &&
                  gameData?.platforms?.length > 0 && (
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
                        <Link
                          key={res?.id}
                          to={{
                            pathname: `/genre/${res?.slug}`,
                          }}
                        >
                          {res.name}
                        </Link>
                      ))}
                    </ResultInfo>
                  </InformationRow>
                )}
              </InfoGame>
            </InfoContainer>
          </SectionContainer>
        </Row>
        {gameScreenshots !== null && gameScreenshots?.length > 0 && (
          <Media>
            <MediaHeader>
              <Helvetica type="gamePageSectionTitle">Media</Helvetica>
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
        <Row>
          <SectionContainer>
            <SectionTitle>
              <ShareIcon />
              <Helvetica type="gamePageSectionTitle">Share</Helvetica>
            </SectionTitle>
            <ShareButtons>
              <FacebookShareButton url={window.location.href}>
                <FacebookIcon size={42} round />
              </FacebookShareButton>
              <LinkedinShareButton url={window.location.href}>
                <LinkedinIcon size={42} round />
              </LinkedinShareButton>
              <RedditShareButton url={window.location.href}>
                <RedditIcon size={42} round />
              </RedditShareButton>
              <TwitterShareButton url={window.location.href}>
                <TwitterIcon size={42} round />
              </TwitterShareButton>
              <TelegramShareButton url={window.location.href}>
                <TelegramIcon size={42} round />
              </TelegramShareButton>
              <WhatsappShareButton url={window.location.href}>
                <WhatsappIcon size={42} round />
              </WhatsappShareButton>
              <EmailShareButton>
                <EmailIcon size={42} round />
              </EmailShareButton>
            </ShareButtons>
          </SectionContainer>
          <SectionContainer>
            {gameData?.stores !== null && gameData?.stores?.length > 0 && (
              <>
                <SectionTitle>
                  <StoresIcon />
                  <Helvetica type="gamePageSectionTitle">Stores</Helvetica>
                </SectionTitle>
                <StoresList>
                  {gameData?.stores.map((store) => (
                    <LinkStore
                      key={store?.store?.slug}
                      href={
                        store?.url
                          ? `${store?.url}`
                          : `https://www.${store?.store?.domain}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {storesSwitch(`${store?.store?.slug}`)}
                      <Helvetica type="gamePageStoreLabel">
                        {store?.store?.name}
                      </Helvetica>
                    </LinkStore>
                  ))}
                </StoresList>
              </>
            )}
          </SectionContainer>
        </Row>

        {gameData?.game_series_count !== null &&
          gameData?.game_series_count > 0 && (
            <Series>
              <SectionTitle>
                <SeriesIcon />
                <Helvetica type="gamePageSectionTitle">Series</Helvetica>
              </SectionTitle>
              <CarouselGames list={gameSeries} />
            </Series>
          )}
      </Container>
    </>
  );
};

export default Game;
