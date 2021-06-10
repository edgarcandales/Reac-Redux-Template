import { combineReducers } from 'redux';
import personaReducer from './personaReducer'

export const rootReducer = combineReducers({
    personas: personaReducer,
});
