import React from 'react'
import { useLocation } from 'react-router-dom';

function ItemDetails() {

    const location = useLocation();
    console.log(location.state);

    const { image, name, price } = location.state;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 pt-[6rem]">
            <img
                src={`../../public/${image}`}
                alt={image}
                className="w-full max-h-[400px] object-cover rounded-lg"
            />

            <div className='flex flex-col justify-start'>
                <p className="text-2xl font-semibold text-pink-600 mb-4">The Coldest Sunset</p>
                <p className="text-xl font-medium text-gray-800 mb-4">{name}</p>
                <p className="text-lg font-semibold text-gray-700 mb-4">{`$${price}`}</p>

                <div className="flex gap-4 mb-4">
                    <select className="py-2 px-4 border-2 border-gray-300 rounded-md">
                        <option value="S">Select size (S)</option>
                        <option value="M">Select size (M)</option>
                        <option value="L">Select size (L)</option>
                        <option value="XL">Select size (XL)</option>
                    </select>
                    <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300">Add To Bag</button>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit sit odio temporibus, repudiandae quia sint libero nisi, recusandae, obcaecati vitae modi reprehenderit explicabo atque fugiat pariatur at adipisci facere?
                </p>
            </div>
        </div>
    );
}


export default ItemDetails