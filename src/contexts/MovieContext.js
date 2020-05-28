import React, { createContext, useReducer } from 'react';
import { movieReducer } from '../Reducers/movieReducer';

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movieList, dispatch] = useReducer(movieReducer, [])
  
  return (
    <MovieContext.Provider value={{ movieList, dispatch}}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
