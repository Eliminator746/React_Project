import React from 'react'

function CartCard({item}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
    <div className="flex items-center justify-between">
      <div className="flex items-start space-x-4">
        <img
          src={`../public/${item.image}`}
          alt={item.name}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
          <p className="text-lg text-gray-600">{`Price: $${item.price}`}</p>
          <p className="text-sm text-gray-500">Expected Delivery: 3-6 days</p>
          <div className="flex items-center gap-2 mt-3">
            <button className="bg-gray-500 text-white px-2 rounded hover:bg-gray-600">+</button>
            <p className="text-gray-700 text-lg">1</p>
            <button className="bg-gray-500 text-white px-2 rounded hover:bg-gray-600">-</button>
          </div>
        </div>
      </div>
      {/* Optional: You can add a remove button for each item here */}
    </div>
  </div>
  )
}

export default CartCard