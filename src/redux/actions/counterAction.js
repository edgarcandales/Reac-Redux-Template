import { INCREASE_COUNTER, DECREASE_COUNTER } from '../types';


export const increaseCounterAction = (counter) => async (dispatch, getState) => {
    try {
        dispatch({
            type: INCREASE_COUNTER,
            payload: counter,
        });
    } catch (error) {
        console.log('error');
    }
};

export const decreaceCounterAction = (counter) => async (dispatch, getState) => {
    try {
        dispatch({
            type: DECREASE_COUNTER,
            payload: counter,
        });
    } catch (error) {
        console.log('error');
    }
};
