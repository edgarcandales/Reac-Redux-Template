import { combineReducers } from 'redux';
import userReducer from './userReducer';
import counterReducer from './counterReducer'

export const rootReducer = combineReducers({
    users: userReducer,
    counter: counterReducer,
});
