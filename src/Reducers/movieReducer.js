import {v4 as uuidv4} from 'uuid'

export const movieReducer = (state, action) => {
  switch (action.type) {
    case ('ADD_MOVIE'):
      return [...state, {
        name: action.movie.name,
        director: action.movie.director,
        id: uuidv4()
      }]
    case ('DELETE_MOVIE'): 
      return state.filter(movie => movie.id !== action.id)
    default:
      return state
  }
}