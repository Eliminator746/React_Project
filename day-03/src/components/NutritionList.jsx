import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import '../css/NutritionInput.css'
import { GlobalContext } from '../context/GlobalState';

function NutritionList({ nutritionData }) {

    const { id, name, calories, protein, carbs, fat, quantity } = nutritionData;

    const { removeItem , updateItem} = useContext(GlobalContext)
    const [isEditing, setIsEditing] = useState(false)

    // State to store the updated values while editing
    const [editedData, setEditedData] = useState({
        name,
        calories,
        protein,
        carbs,
        fat
    });

    // Handle input changes and update the nutritionalProfile state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return <>

        <div className='border rounded-md bg-gray-100 p-3 shadow-lg border-blue-500 space-y-3  sm:p-5 md:p-6'>
            <h1 className='text-2xl font-semibold  sm:text-2xl'>
                {isEditing ? (
                    <input
                        type='text'
                        name='name'
                        value={editedData.name}
                        onChange={handleChange}
                        className="w-full px-2 py-1 border rounded-md"
                    />
                ) : (
                    name
                )}
            </h1>

            <ul className='font-normal sm:text-base'>
                <li>
                    Calories : {isEditing ? (
                        <input
                            type='number'
                            name='calories'
                            value={editedData.calories}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md"
                        />
                    ) : (
                        calories
                    )}
                </li>
                <li>
                    Protein : {isEditing ? (
                        <input
                            type='number'
                            name='protein'
                            value={editedData.protein}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md"
                        />
                    ) : (
                        `${protein}g`
                    )}
                </li>
                <li>
                    Carbs : {isEditing ? (
                        <input
                            type='number'
                            name='carbs'
                            value={editedData.carbs}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md"
                        />
                    ) : (
                        `${carbs}g`
                    )}
                </li>
                <li>
                    Fat : {isEditing ? (
                        <input
                            type='number'
                            name='fat'
                            value={editedData.fat}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border rounded-md"
                        />
                    ) : (
                        `${fat}g`
                    )}
                </li>
            </ul>

            <IncDecBtn quantity={quantity} />
            <div className='flex gap-2 pb-2' >
                {isEditing ?
                    <button className='editdeletebtn bg-blue-500' onClick={() =>{  updateItem(id, editedData); setIsEditing(false)}}>
                        <FontAwesomeIcon icon={faEdit} /> Save
                    </button>
                    :
                    <button className='editdeletebtn bg-blue-500' onClick={() => { setIsEditing(true);}}>
                        <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                }
                <button className='editdeletebtn bg-red-500' onClick={() => removeItem(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>
            </div>
        </div>

    </>
}

function IncDecBtn({ quantity }) {

    return <div className='flex items-center gap-x-1  sm:gap-x-3 md:gap-x-4'>

        <button className='incdecbtn bg-green-500  sm:text-base'>+</button>
        <p>{quantity}</p>
        <button className='incdecbtn bg-red-500  sm:text-base'>-</button>
    </div>
}

export default NutritionList