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
        totalCalories +=items.calories;
        totalProtein +=items.protein;
        totalCarbs +=items.carbs;
        totalFat +=items.fat;
        return;
    })
    return (
        <div className='text-center font-semibold mt-7 space-y-1' >

            <div>Total Calories : {totalCalories}  <span>
              <FontAwesomeIcon icon={faUtensils} size="lg" className='text-blue-500' />
            </span> </div>
            <div>Total Protein : {totalProtein}g </div>
            <div>Total Carbs : {totalCarbs}g </div>
            <div>Total Fat : {totalFat}g </div>

        </div>
    )
}

export default NutritionInfo