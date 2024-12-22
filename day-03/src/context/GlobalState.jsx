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
        
        dispatch({
            type: 'added',
            singleObj: itemWithIdAndQuantity
        })
    }
    
    return (
        <GlobalContext.Provider value={{
            nutritionData: state,
            handleAddItem,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

