import {combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {productReducer} from './product/productReducer';
import {userLoginReducer} from './user/userReducer';
import {cartReducer} from './cart/cartReducer';

const reducer = combineReducers({
    productReducer : productReducer,
    userLogin : userLoginReducer,
    cart : cartReducer,
});

const initialState = {
    userLogin : {userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null },
    cart : {
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    }
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk,logger)));

export default store;