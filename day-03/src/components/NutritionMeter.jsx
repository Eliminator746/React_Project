import React from 'react'
import NutritionInput from './NutritionInput'
import NutritionCard from './NutritionCard'

export default function NutritionMeter() {
  return <div className='w-full'>
    <h1 className="font-bold text-4xl tracking-widest text-center border-b border-black shadow-sm pt-4 " >Nutrition Meter</h1>
    <div className='px-3'>
      <NutritionInput />
      <NutritionCard />
    </div>
  </div>
}
