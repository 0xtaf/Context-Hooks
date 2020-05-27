import React, { useState, createContext } from 'react';
import {v4 as uuidv4} from 'uuid'

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movieList, setMovieList] = useState([
    { name: 'Frost / Nixon', director: 'Ron Howard', id: 1 },
    { name: 'Taking Sides', director: 'István Szabó', id: 2 },
  ]);

  const addMovie = (name, director) => {
    setMovieList([...movieList, {name, director, id: uuidv4()}])
  }

  const deleteMovie = (id) => {
    setMovieList(movieList.filter(movie => {
      return movie.id !== id
    }))
  }
  return (
    <MovieContext.Provider value={{ movieList , addMovie, deleteMovie}}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
