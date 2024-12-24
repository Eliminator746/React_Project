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

        case 'updateItem':{
            return state.map((item) => {
                if (item.id === action.id) {
                    // Return the updated item with the new data
                    return { ...item, ...action.editedData };
                }
                return item; // Return the unchanged item
            });
        }
        
        case 'increment' :{
            
            return state.map((item)=>{
                if(item.id === action.id){
                    return {...item, quantity : item.quantity + 1 }
                }else   
                    return item;
            })
        }
        case 'decrement' :{
            return state.map((item)=>{
                if(item.id === action.id && item.quantity > 0){
                    return {...item, quantity : item.quantity - 1 }
                }else   
                    return item;
            })
        }
            

        default:
            return state;
    }
}