import {
        USER_LOGIN,
        USER_LOGOUT
    } from './userConstants';

export const login = (user) => (dispatch) => {
        dispatch({type : USER_LOGIN, payload : user})
        localStorage.setItem('userInfo', JSON.stringify(user));
}

export const logout = () => (dispatch) =>{
        localStorage.removeItem('userInfo')
        dispatch({type : USER_LOGOUT})
}

