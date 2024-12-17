import React, { useState } from 'react'
import MovieCard from "../components/MovieCard"
import '../css/Home.css'
import { getPopularMovie } from '../services/API';

export default function Home() {

  const movie = getPopularMovie();

  const [searchQuery, setSearchQuery] = useState("") // This state persists until you reload the page. After reloading of page, state variable to initial value again
  function handleSubmit(e) {

    e.preventDefault();  // Prevents default form behavior (page reload)

    alert(searchQuery)
  }

  return <div className='home'>


    <form onSubmit={handleSubmit} className='search-form'>

      <input type="text" placeholder='Search Movie...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className='search-button' type='submit'>Search</button>

    </form>

    {/* Filtering */}
    <div className="movie-grid">
      {movie.map((movieItems) => movieItems.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
        <MovieCard movie={movieItems} key={movieItems.id} />)}
    </div>
  </div>

}
