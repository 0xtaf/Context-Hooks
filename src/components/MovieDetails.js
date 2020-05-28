import React, {useContext} from 'react'

import {MovieContext} from '../contexts/MovieContext'
const MovieDetails = ({movie}) => {
  const {dispatch} = useContext(MovieContext)
  return (
    <li onClick={() => dispatch({type: 'DELETE_MOVIE', id: movie.id})}>
      <div className="name">{movie.name}</div>
      <div className="director">{movie.director}</div>
    </li>
  )
}

export default MovieDetails
