import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Order from './page/Order'
import Cart from './page/Cart'
import Checkout from './components/Checkout'
import ItemDetails from './page/ItemDetails'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>

      <main className='main-content'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/itemDetails" element={<ItemDetails />} />
        </Routes>
      </main>


    </BrowserRouter>
  )
}

export default App