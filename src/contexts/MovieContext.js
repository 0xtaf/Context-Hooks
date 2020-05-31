import React, { createContext, useReducer, useEffect } from 'react';
import { movieReducer } from '../Reducers/movieReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movieList, dispatch] = useReducer(movieReducer, [], () => {
    const localData = localStorage.getItem('movies');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movieList));
  }, [movieList]);

  return (
    <MovieContext.Provider value={{ movieList, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
