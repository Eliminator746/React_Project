import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import '../css/NutritionInput.css'
import { GlobalContext } from '../context/GlobalState';

function NutritionList({nutritionData}) {

    const {id, name, calories , protein, carbs ,fat, quantity} = nutritionData;

    const {removeItem}=useContext(GlobalContext)

    return <>

        <div className='border rounded-md bg-gray-100 p-3 shadow-lg border-blue-500 space-y-3  sm:p-5 md:p-6'>
            <h1 className='text-2xl font-semibold  sm:text-2xl'>{name}</h1>

            <ul className='font-normal sm:text-base'>
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
                <button className='editdeletebtn bg-red-500' onClick={() => removeItem(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>
            </div>
        </div>

    </>
}

function IncDecBtn({quantity}) {

    return <div className='flex items-center gap-x-1  sm:gap-x-3 md:gap-x-4'>

        <button className='incdecbtn bg-green-500  sm:text-base'>+</button>
        <p>{quantity}</p>
        <button className='incdecbtn bg-red-500  sm:text-base'>-</button>
    </div>
}

export default NutritionList