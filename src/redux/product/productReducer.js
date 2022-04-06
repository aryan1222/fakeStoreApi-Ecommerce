import { productState } from "./productState";
import {FETCH_PRODUCTS_REQUEST, 
        FETCH_PRODUCT_REQUEST,
        FETCH_PRODUCTS_SUCCESS, 
        FETCH_PRODUCTS_FAIL,
        FETCH_PRODUCT_FAIL,
        SET_SELECTED_PRODUCT,
        REMOVE_SELECTED_PRODUCT} from './productConstants';

export const productReducer = (state = productState, action) =>{
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST : 
        case FETCH_PRODUCT_REQUEST :
            return {...state, loading : true};

        case FETCH_PRODUCTS_SUCCESS : 
            return {...state, loading : false, products : action.payload}

        case FETCH_PRODUCT_FAIL : 
        case FETCH_PRODUCTS_FAIL : 
            return {...state, error : action.payload}

        case SET_SELECTED_PRODUCT :
            return {...state, loading : false, product: action.payload}

        case REMOVE_SELECTED_PRODUCT :
            return {...state, product: {}}
        
        default :
            return state;
    }
}
