import React, { useState } from "react";
import styled from "styled-components";

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <SearchForm>
      <SearchInput
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <SearchSubmit onClick={callSearchFunction} type="submit" value="SEARCH" />
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  width: 40%;
  min-width: 170px;
`;

const SearchSubmit = styled.input`
  padding: 5px;
  background-color: transparent;
  color: black;
  border: 1px solid black;
  width: 80px;
  margin-left: 5px;
  cursor: pointer;

  :hover {
    background-color: #282c34;
    color: antiquewhite;
  }
`;

export default Search;
