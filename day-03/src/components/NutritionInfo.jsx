import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function NutritionInfo() {

    const {nutritionData}=useContext(GlobalContext);

    let totalCalories=0;
    let totalProtein=0;
    let totalCarbs=0;
    let totalFat=0;

    nutritionData.map((items)=>{
        totalCalories +=items.calories*items.quantity;
        totalProtein +=items.protein*items.quantity;
        totalCarbs +=items.carbs*items.quantity;
        totalFat +=items.fat*items.quantity;
        return;
    })
    console.log(nutritionData);
    
    return (
        <div className='text-center font-semibold mt-5 space-y-1' >

            <div>Total Calories : {totalCalories.toFixed(2)}  <span>
              <FontAwesomeIcon icon={faUtensils} size="lg" className='text-blue-500' />
            </span> </div>
            <div>Total Protein : {totalProtein.toFixed(2)}g </div>
            <div>Total Carbs : {totalCarbs.toFixed(2)}g </div>
            <div>Total Fat : {totalFat.toFixed(2)}g </div>

        </div>
    )
}

export default NutritionInfo