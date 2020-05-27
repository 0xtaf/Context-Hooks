import React, { useContext, useState } from 'react';

import { MovieContext } from '../contexts/MovieContext';

const MovieForm = () => {
  const { addMovie } = useContext(MovieContext);
  const [name, setName] = useState('');
  const [director, setDirector] = useState('');

  const handleSubmit =(e) => {
    e.preventDefault();
    addMovie(name, director)
    setName('')
    setDirector('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="movie name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="director name"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
      <input type="submit" value="Add Movie" />
    </form>
  );
};

export default MovieForm;
