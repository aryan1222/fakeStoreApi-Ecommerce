import {ADD_ITEM, REMOVE_ITEM} from './cartConstants';

export const addItem = (newItem) => async (dispatch, getState) =>{
    console.log(newItem)
    dispatch({type : ADD_ITEM, payload : {newItem}})
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeItem = (removedItem) => async (dispatch, getState) =>{
    dispatch({type : REMOVE_ITEM, payload : {removedItem}})
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}