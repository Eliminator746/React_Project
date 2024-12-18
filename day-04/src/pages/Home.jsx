import React, { useEffect, useState } from 'react'
import MovieCard from "../components/MovieCard"
import '../css/Home.css'
import { getPopularMovie, searchMovies } from '../services/api';

export default function Home() {


  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const renderMovie = async () => {
      try {
        const data = await getPopularMovie();
        console.log(data);

        setMovie(data)
        // We are using movie as variable below, so we set movie 

      } catch (err) {
        console.log(err);
        setError("This is an error in loading movies")

      } finally {
        setLoading(false)

      }
    }

    renderMovie();
  }, [])


  // Searching Movie Logic
  const [searchQuery, setSearchQuery] = useState("") // This state persists until you reload the page. After reloading of page, state variable to initial value again
  async function handleSearch(e) {

    // Prevents default form behavior (page reload)
    e.preventDefault();  

    // Check if user adding spaces only. We do nothing for this.
    if(!searchQuery.trim()) return;

    // This makes sure if engine is searching for movie already, don't let another search begin
    if(loading) return
    setLoading(true)

    try{

      const matchingMovie = await searchMovies(searchQuery);
      setMovie(matchingMovie)
      
      // If ant error came earlier, clear it 
      setError(null)

    }catch(err){

      console.log(err);
      setError("Error while searching ")
    }finally{
      
      setLoading(false)
    }
    
  }

  return <div className='home'>


    <form onSubmit={handleSearch} className='search-form'>

      <input type="text" placeholder='Search Movie...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button className='search-button' type='submit'>Search</button>

    </form>

    {error && <div>{error}</div>}

    {/* Data loaded from backend : Show all popular movies Else : Show Loading*/}
    {loading ? (
      <div className="loading">Loading...</div>
    ) : (
      <div className="movies-grid">
        {movie.map((movieItem) => (
          <MovieCard movie={movieItem} key={movieItem.id} />
        ))}
      </div>
    )}

  </div>


}
