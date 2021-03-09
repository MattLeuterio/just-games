import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import {
  CloseOutline as CloseIcon,
  Search as SearchIcon,
} from "react-ionicons";
import { searchModalToggle } from "../../../features/modals/modalsSlice";
import {
  Container,
  Game,
  ImageBox,
  Platform,
  SearchContainer,
  SearchInput,
  SuggestionGames,
} from "./style";
import {
  getSearchResults,
  selectSearchResults,
} from "../../../features/search/searchSlice";
import { platformType } from "../../../utils";
import Background from "../../../ui/assets/img/search-page-bg.png";

const SearchModal = ({ open }) => {
  const [valueSearch, setValueSearch] = useState("");
  const [suggestionBoxVisibility, setSuggestionBoxVisibility] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const suggestionGames = useSelector(selectSearchResults);

  const handleOnChange = (value) => {
    setValueSearch(value);
    if (valueSearch.length > 2) {
      dispatch(getSearchResults({ text: valueSearch, page: 1 }));
      setSuggestionBoxVisibility(true);
    }
    if (valueSearch.length < 2) setSuggestionBoxVisibility(false);
  };

  const handleOnKeyPressEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      history.push(`/search/${valueSearch.replaceAll(" ", "-").toLowerCase()}`);
      onClose();
    }
  };

  const handleOnClickSearchIcon = (e) => {
    history.push(`/search/${valueSearch.replaceAll(" ", "-")}`);
    onClose();
  };

  const handleOnClickGame = () => {
    onClose();
  };

  const onClickIconCloseModal = () => {
    const locationString = window.location.pathname.replace("/search/", "");
    dispatch(getSearchResults({ text: locationString, page: 1 }));
    onClose();
  }
  
  const onClose = () => {
    setValueSearch('');
    dispatch(searchModalToggle());
    setSuggestionBoxVisibility(false);
  };

  return (
    <Container open={open}>
      <CloseIcon onClick={() => onClickIconCloseModal()} />
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={valueSearch}
          onChange={(e) => handleOnChange(e.target.value)}
          onKeyPress={(e) => handleOnKeyPressEnter(e)}
          maxlength="10"
        />
        <SearchIcon
          onClick={(e) => handleOnClickSearchIcon(e)}
          color={"#eceaef"}
          width="35px"
          height="35px"
        />
        {suggestionBoxVisibility && (
          <SuggestionGames>
            {suggestionGames?.results?.map((game) => (
              <Link
                key={game?.id}
                to={{
                  pathname: `/game/${game?.slug}`,
                }}
                onClick={() => handleOnClickGame()}
              >
                <Game>
                  <ImageBox
                    bgResult={
                      game?.background_image !== null
                        ? game?.background_image
                        : Background
                    }
                  ></ImageBox>
                  {game?.name}
                  <Platform>{platformType(game?.parent_platforms)}</Platform>
                </Game>
              </Link>
            ))}
          </SuggestionGames>
        )}
      </SearchContainer>
    </Container>
  );
};

export default SearchModal;
