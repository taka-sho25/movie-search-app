import React from "react";
import styled from "styled-components";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <MovieWrap>
      <MovieTitle>{movie.Title}</MovieTitle>
      <MoviePosterWrap>
        <MoviePoster
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </MoviePosterWrap>
      <MovieYear>({movie.Year})</MovieYear>
    </MovieWrap>
  );
};

const MovieWrap = styled.div`
  padding: 5px 25px 10px 25px;
  max-width: 25%;
  @media (min-width: 694px) and (max-width: 915px) {
    max-width: 33%;
  }

  @media (min-width: 652px) and (max-width: 693px) {
    max-width: 50%;
  }

  @media (max-width: 651px) {
    max-width: 100%;
    margin: auto;
  }
`;

const MovieTitle = styled.h2``;
const MoviePosterWrap = styled.div``;
const MoviePoster = styled.img``;
const MovieYear = styled.p``;

export default Movie;
