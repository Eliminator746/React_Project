import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartCard from '../components/CartCard';

function Cart() {
  // As addtobag item is clicked, multiple items will be loaded in local storage, so we need arr. to handle it
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("bagItem"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  // If no items are in the cart, show a message
  if (items.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-xl text-gray-700">Your cart is empty. Add items to your bag.</p>
            <Link to={"/"}>
              <button className="mt-6 bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300">
                Go Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        {items.map((item) => (
         <CartCard item={item}/>
        ))}

        {/* Proceed to Checkout Button */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <div className="flex justify-between items-center">
            <p className="text-lg text-gray-800 font-semibold">Total: ${items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
            <Link to="/checkout">
              <button className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
