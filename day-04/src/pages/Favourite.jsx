import React from 'react'
import { useMovieContext } from '../context/GlobalContext'
import MovieCard from "../components/MovieCard"

export default function Favourite() {

  const {favourite} =useMovieContext()
  return (
    <div>
      <h2>Favourite Movie </h2>
       <div className="movies-grid">
        {favourite.map((movieItem) => (
          <MovieCard movie={movieItem} key={movieItem.id} />
        ))}
      </div>
    </div>
  )
}
