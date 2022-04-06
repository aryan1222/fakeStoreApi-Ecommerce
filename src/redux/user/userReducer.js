import {
    USER_LOGIN,
    USER_LOGOUT
} from './userConstants';

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN:
        return { userInfo: action.payload }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
}
