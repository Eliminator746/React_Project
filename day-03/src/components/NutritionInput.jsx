import React, { useContext, useState } from 'react'
import '../css/NutritionInput.css'
import { GlobalContext } from '../context/GlobalState'

function NutritionInput() {
    const { nutritionData , handleAddItem , handleClear} = useContext(GlobalContext);

    const [nutritionalProfile, setNutritionalProfile] = useState({
        name: '',
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
    })

    // Handle input changes and update the nutritionalProfile state
    const handleChange = (e) => {
        const { name, value ,type} = e.target;
        if(type==="text"){
            setNutritionalProfile((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }else{
            setNutritionalProfile((prevState) => ({
                ...prevState,
                [name]: Number(value)
            }));
        }
       
    };


    return <div>

        <div className='grid grid-cols-2 gap-x-2 py-3 mt-5 text-gray-200'>
            <input type="text"  name="name" placeholder='Item Name' value={nutritionData.name} onChange={handleChange} className='grid-Items' />
            <input type="number" name='calories' placeholder='Calories' value={nutritionData.calories} onChange={handleChange} className='grid-Items' />
            <input type="number" name='protein' placeholder='Protein (g)' value={nutritionData.protein} onChange={handleChange} className='grid-Items' />
            <input type="number" name='carbs' placeholder='Carbs (g)' value={nutritionData.carbs}onChange={handleChange} className='grid-Items' />
            <input type="number" name='fat' placeholder='Fat (g)' value={nutritionData.fat} onChange={handleChange} className='grid-Items' />
            <div></div>
            <ButtonComponent btn="Add Items" onClick={() => handleAddItem(nutritionalProfile)} color="bg-green-500 hover:bg-blue-600" />
            <ButtonComponent btn="Clear All" onClick={() => handleClear()} color="bg-red-500 hover:bg-pink-600" />
        </div>

    </div>
}

function ButtonComponent({ btn, color , onClick}) {

    return <>
        <button className={`border p-2 shadow-md text-md rounded-lg text-gray-200 ${color}`} onClick={onClick}>{btn}</button>
    </>
}

export default NutritionInput