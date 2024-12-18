import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.jsx";
import { defaultItemsDisplayed } from '../data/data.js'

//For useReducer we need : initial state , reducer fun ,  
// Initial State
const initialState = {
    nutritionData : defaultItemsDisplayed
}

// create context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={ { nutritionData: state.nutritionData } }>
            {children}
        </GlobalContext.Provider>
    )
} 

