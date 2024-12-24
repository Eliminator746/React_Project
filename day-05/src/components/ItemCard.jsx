import React from 'react'

function ItemCard({itemResources}) {
    
    const {image ,name, brand, price, rating}=itemResources;
    return <>
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full h-80 object-cover"  src={`../../public/${image}`} alt={image}  />
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <div className='space-y-1'>
                    <p className="text-gray-700 text-base"> {name} </p>
                    <p className="text-gray-700 text-base"> {brand} </p>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`$${price}`}</span>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${rating}★`}</span>
            </div>
        </div>
    </>
}

export default ItemCard