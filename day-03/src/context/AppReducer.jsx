//All states resides here : This is what reducer is
export default (state, action) => {
    
    switch (action.type) {

        case 'added' : {
            return [ 
                ...state, // Preserve other properties of the state
                action.singleObj               
            ];
        }
            

        default:
            return state;
    }
}