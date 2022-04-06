import {
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAIL, 
    FETCH_PRODUCT_FAIL,
    SET_SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT} from './productConstants';

import axios from 'axios';

export const fetchProducts = (sort) => async (dispatch) =>{

    try{
        dispatch({type : FETCH_PRODUCTS_REQUEST})

        let res;
        if(sort){
            res = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`)
        }else{
            res = await axios.get('https://fakestoreapi.com/products');
        }

        console.log(res)
        dispatch({type : FETCH_PRODUCTS_SUCCESS, 
                    payload : res.data})

    }catch(err){
        dispatch({type : FETCH_PRODUCTS_FAIL, 
                    payload : err.response && (err.response.data.message ? 
                                                err.response.data.message : err.message)})
    }
}

export const fetchProduct = (selectedId) => async (dispatch) =>{
    try{
        dispatch({type : FETCH_PRODUCT_REQUEST})
        const res = await axios.get(`https://fakestoreapi.com/products/${selectedId}`);
        dispatch({type : SET_SELECTED_PRODUCT, payload : res.data})
    }catch(err){
        dispatch({type : FETCH_PRODUCT_FAIL, 
            payload : err.response && (err.response.data.message ? 
                                        err.response.data.message : err.message)})
    }
}

export const removeSelectedProduct = () => async (dispatch) =>{
    dispatch({type : REMOVE_SELECTED_PRODUCT})
}