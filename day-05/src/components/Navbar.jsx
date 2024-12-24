import React from 'react'

function Navbar() {
  return (
    <div className='sticky top-0 z-10 flex justify-between items-center py-4 px-6 bg-white bg-opacity-80 backdrop-blur-md text-gray-800 shadow-lg'>
        <h1 className='font-bold text-2xl tracking-wider cursor-pointer transition duration-100 ease-in-out hover:scale-110'>Shoppin</h1>
        
        <ul className='flex space-x-6 items-center'>
            <li className='navbar-item'>Womens</li>
            <li className='navbar-item'>Mens</li>
            <li className='navbar-item'>Clothing</li>
            <li className='navbar-item'>Brand</li>
            <li className='navbar-item'>Cart(0)</li>
            <li className='navbar-item'>Order</li>
            <li>
                <button className='px-4 py-2 bg-red-700 hover:bg-orange-600 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-300'>
                    Hi John
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
