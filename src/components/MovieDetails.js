import React, {useContext} from 'react'

import {MovieContext} from '../contexts/MovieContext'
const MovieDetails = ({movie}) => {
  const {deleteMovie} = useContext(MovieContext)
  return (
    <li onClick={() => deleteMovie(movie.id)}>
      <div className="name">{movie.name}</div>
      <div className="director">{movie.director}</div>
    </li>
  )
}

export default MovieDetails