import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.jsx';
import NutritionList from './NutritionList';


function NutritionCard() {
  
  const { nutritionData } = useContext(GlobalContext);
  console.log(nutritionData);
  return <div className='grid grid-cols-6 gap-x-4 mt-5'>
  
    {nutritionData.map((items)=> <NutritionList nutritionData={items}/>)}
  
  </div>
}

export default NutritionCard