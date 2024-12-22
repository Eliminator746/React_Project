//All states resides here : This is what reducer is
export default (state, action) => {
    
    switch (action.type) {

        case 'added' : {
            return [ 
                ...state, // Preserve other properties of the state
                action.singleObj               
            ];
        }
        case 'clearAll' : {
            return []
        }

        case 'removeItem' : {
            return state.filter((items)=> items.id !== action.payload)
        }
            

        default:
            return state;
    }
}