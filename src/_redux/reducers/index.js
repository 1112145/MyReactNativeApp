import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../actions';

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.AUTH:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}

// if you have more reducers, write out them then combine them all together!! ^^
export default combineReducers({
    auth: authReducer,
})