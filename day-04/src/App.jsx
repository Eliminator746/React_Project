import './App.css'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import { Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>



      </main>
    </div>
  )
}

export default App
