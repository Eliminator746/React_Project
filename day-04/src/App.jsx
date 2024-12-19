import './css/App.css'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import { MovieProvider } from './context/GlobalContext'

function App() {

  return (
    <MovieProvider>

      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>

      
    </MovieProvider>
  )
}

export default App
