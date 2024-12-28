import React from 'react'

function Checkout() {
  return (
    <div >

      <div className="checkout-box">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Available Coupons</h1>

        <div>
          <div className="flex justify-between items-center p-3">
            <span className="text-gray-700 font-medium">Lorem ipsum dolor sit amet consectetur</span>
            <span className="text-green-600 font-semibold">10% off</span>
          </div>

          <div className="flex justify-between items-center p-3">
            <span className="text-gray-700 font-medium">Lorem ipsum dolor sit amet consectetur</span>
            <span className="text-blue-600 font-semibold">15% off</span>
          </div>

          <div className="flex justify-between items-center p-3">
            <span className="text-gray-700 font-medium">Lorem ipsum dolor sit amet consectetur</span>
            <span className="text-red-600 font-semibold">Buy 2 Get 1 Free</span>
          </div>
        </div>
      </div>


      <div className="checkout-box">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout Summary</h1>

        <div className="space-y-4">
          <p className="price-summary">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold text-gray-900">$123</span>
          </p>
          <p className="price-summary">
            <span className="font-medium">Discount</span>
            <span className="font-semibold text-red-600">-$1.99</span>
          </p>
          <p className="price-summary">
            <span className="font-medium">Extra Fee</span>
            <span className="font-semibold text-gray-900">$1.20</span>
          </p>
          <p className="price-summary">
            <span className="font-medium">Tax</span>
            <span className="font-semibold text-gray-900">$0.25</span>
          </p>
          <p className="price-summary text-gray-800">
            <span className="font-bold">Total</span>
            <span className="font-bold text-green-600">$123</span>
          </p>
        </div>

        <button className="w-full mt-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
          Pay $123
        </button>
      </div>
    </div>

  )
}

export default Checkout