import { ADD_PERSONA } from '../types';

export const addingPersonaAction = (data) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_PERSONA,
            payload: data,
        });
    } catch (error) {
        console.log('error');
    }
};