import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  CloseOutline as CloseIcon,
  Search as SearchIcon,
} from "react-ionicons";
import { searchModalToggle } from "../../../features/modals/modalsSlice";
import { Container, SearchContainer, SearchInput } from "./style";

const SearchModal = ({ open }) => {
  const [valueSearch, setValueSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnChange = (value) => {
    setValueSearch(value);
  };

  const handleOnMouseEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      setValueSearch("");
      dispatch(searchModalToggle());
      history.push(`/search/${valueSearch.replaceAll(" ", "-").toLowerCase()}`);
    }
  };

  const handleOnClickSearchIcon = (e) => {
    setValueSearch("");
    dispatch(searchModalToggle());
    history.push(`/search/${valueSearch.replaceAll(" ", "-")}`);
  };
  return (
    <Container open={open}>
      <CloseIcon onClick={() => dispatch(searchModalToggle())} />
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={valueSearch}
          onChange={(e) => handleOnChange(e.target.value)}
          onKeyPress={(e) => handleOnMouseEnter(e)}
        />
        <SearchIcon
          onClick={(e) => handleOnClickSearchIcon(e)}
          color={"#eceaef"}
          width="35px"
          height="35px"
        />
      </SearchContainer>
    </Container>
  );
};

export default SearchModal;
