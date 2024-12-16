import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  const movie= {
    title : "Spiderman", 
    img : "https://picsum.photos/200/300",
    release_date : "20-12-2024"
  }
  return (
    <>
      <MovieCard movie={movie}/>
    </>
  )
}

export default App
