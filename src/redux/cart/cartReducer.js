import {ADD_ITEM, REMOVE_ITEM} from './cartConstants';

export const cartReducer = (state = {cartItems : []}, action) => {

    switch(action.type) {
        case ADD_ITEM:
            const {newItem} = action.payload;
            let newArr;
            const existItem = state.cartItems.find(item => item.id === newItem.id)
            if(existItem) {
                newArr = state.cartItems.map(item => {
                    if(item.id === existItem.id){
                        return newItem;
                    }else{
                        return item;
                    }
                    })
                }else{
                    newArr = [...state.cartItems, newItem]
                }
            
            return {...state, cartItems : newArr}

        case REMOVE_ITEM:
            const {removedItem} = action.payload;
            return {...state, cartItems : state.cartItems.filter(item => item.id !== removedItem.id)}
        
        default : return state
    }
}