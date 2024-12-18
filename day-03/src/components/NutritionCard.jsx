import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.jsx';
import NutritionList from './NutritionList';


function NutritionCard() {
  
  const { nutritionData } = useContext(GlobalContext);
  console.log(nutritionData);
  return <div className='grid grid-cols-1 gap-x-4 gap-y-1 mt-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
  
    {nutritionData.map((items)=> <NutritionList nutritionData={items}/>)}
  
  </div>
}

export default NutritionCard