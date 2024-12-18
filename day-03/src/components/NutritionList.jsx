import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import '../css/NutritionInput.css'

function NutritionList({nutritionData}) {

    const {name, calories , protein, carbs ,fat, quantity} = nutritionData;
    return <>

        <div className='border rounded-md bg-gray-100 p-3 shadow-lg border-blue-500 space-y-3'>
            <h1 className='text-2xl font-semibold'>{name}</h1>

            <ul className='font-normal'>
                <li>Calories : {calories}</li>
                <li>Protein : {protein}g</li>
                <li>Carbs : {carbs}g</li>
                <li>Fat : {fat}g</li>
            </ul>

            <IncDecBtn quantity={quantity}/>
            <div className='flex gap-2 pb-2' >
                <button className='editdeletebtn bg-blue-500'>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button className='editdeletebtn bg-red-500'>
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>
            </div>
        </div>

    </>
}

function IncDecBtn({quantity}) {

    return <div className='flex items-center gap-x-1'>

        <button className='incdecbtn bg-green-500'>+</button>
        <p>{quantity}</p>
        <button className='incdecbtn bg-red-500'>-</button>
    </div>
}

export default NutritionList