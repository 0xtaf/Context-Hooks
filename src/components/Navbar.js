import React, {useContext} from 'react'

import {MovieContext} from '../contexts/MovieContext'

const Navbar = () => {
  const {movieList} = useContext(MovieContext);
  return (
    <div className="navbar">
      <h1>Movie List To Be Watched</h1>
      <p>You have {movieList.length} movies to watch</p>
    </div>
  )
}

export default Navbar
