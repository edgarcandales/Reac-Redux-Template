import { INCREASE_COUNTER, DECREASE_COUNTER } from '../types';

const initialState = {
    counterState: 0,
};
export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return { ...state, counterState: action.payload };
        case DECREASE_COUNTER:
            return { ...state, counterState: action.payload };
        default:
            return state;
    }
}