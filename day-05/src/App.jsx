import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Order from './page/Order'
import Cart from './page/Cart'
import Checkout from './components/Checkout'

function App() {

  return (
    <BrowserRouter>

      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>


    </BrowserRouter>
  )
}

export default App