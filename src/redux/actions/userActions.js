import { ADD_USER } from '../types';

export const addingUserAction = (data) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_USER,
            payload: data,
        });
    } catch (error) {
        console.log('error');
    }
};
