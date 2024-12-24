import React from 'react'
import {items} from "../data/items";
import ItemCard from './ItemCard';

function ItemList() {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 px-2'>
       { items.map((item)=> <ItemCard key={item.id} itemResources={item}/>)}
    </div>
  )
}

export default ItemList