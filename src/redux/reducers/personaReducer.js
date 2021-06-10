import { ADD_PERSONA } from '../types';

const initialState = {
    personas: [{
        name: "Edgar",
        age: "18",
        password: "fsdf"
    }],
};
export default function personaReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PERSONA:
            return { ...state, personas: [...state.personas, action.payload] };

        default:
            return state;
    }
}