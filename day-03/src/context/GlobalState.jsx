import { createContext, useReducer, useRef } from "react";
import AppReducer from "./AppReducer.jsx";
import { defaultItemsDisplayed } from '../data/data.js'

//For useReducer we need : initial state , reducer fun ,  
// Initial State
const initialState = defaultItemsDisplayed

// create context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    const nextId = useRef(5);
    function handleAddItem(nutritionalProfile) {

        const itemWithIdAndQuantity = {
            ...nutritionalProfile, // Existing properties
            id: nextId.current++, 
            quantity: 1 // Default quantity
        };
          // Validate that no input field is empty
          if (
            !(
                nutritionalProfile.name &&
                nutritionalProfile.calories > 0 &&
                nutritionalProfile.protein > 0 &&
                nutritionalProfile.carbs > 0 &&
                nutritionalProfile.fat > 0
            )
        ) {
            alert('Please fill in all fields with valid values!');
            return; // Do not dispatch the action if validation fails
        }
        dispatch({
            type: 'added',
            singleObj: itemWithIdAndQuantity
        })
    }

    function handleClear(){

        dispatch({
            type : 'clearAll',
        })
    }

    function removeItem(id){

        dispatch({
            type : 'removeItem',
            payload : id
        })
    }
    
    return (
        <GlobalContext.Provider value={{
            nutritionData: state,
            handleAddItem,
            handleClear,
            removeItem,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

