import React from 'react'
import '../css/NutritionInput.css'

function NutritionInput() {
    return <div>

        <div className='grid grid-cols-2 gap-x-2 py-3 mt-5 text-gray-200'>
            <input type="text" placeholder='Item Name' className='grid-Items' />
            <input type="text" placeholder='Calories' className='grid-Items' />
            <input type="text" placeholder='Protein (g)' className='grid-Items' />
            <input type="text" placeholder='Carbs (g)' className='grid-Items' />
            <input type="text" placeholder='Fat (g)' className='grid-Items' />
            <div></div>
            <ButtonComponent btn="Add Items" color="bg-green-500 hover:bg-blue-600" />
            <ButtonComponent btn="Clear All" color="bg-red-500 hover:bg-pink-600" />
        </div>

    </div>
}

function ButtonComponent({ btn, color }) {

    return <>
        <button className={`border p-2 shadow-md text-md rounded-lg text-gray-200 ${color}`} >{btn}</button>
    </>
}

export default NutritionInput