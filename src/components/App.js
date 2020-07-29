import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

const MOVIE_API_URL = "http://www.omdbapi.com/?apikey=9c743b96";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(true);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=9c743b96`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <AppContent>
      <Header text="Search Movie App" />
      <Search search={search} />
      <Intro>Sharing a few of our favourite movies</Intro>
      <MoviesWrap>
        {loading && !errorMessage ? (
          <Loading>loading...</Loading>
        ) : errorMessage ? (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </MoviesWrap>
    </AppContent>
  );
};

const AppContent = styled.div`
  text-align: center;
`;

const MoviesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Intro = styled.p`
  font-size: large;
`;

const Loading = styled.span`
  margin: 0 auto;
`;

const ErrorMessage = styled.div`
  margin: auto;
  font-weight: bold;
  color: rgb(161, 15, 15);
`;

export default App;
