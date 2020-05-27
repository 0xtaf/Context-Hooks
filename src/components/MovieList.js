import React, { useContext } from 'react';
import MovieDetails from './MovieDetails';

import { MovieContext } from '../contexts/MovieContext';

const MovieList = () => {
  const { movieList } = useContext(MovieContext);

  return movieList.length ? (
    <div className="movie-list">
      <ul>
        {movieList.map((movie) => {
          return <MovieDetails movie={movie} key={movie.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">You binged all the movies in the world</div>
  );
};

export default MovieList;
