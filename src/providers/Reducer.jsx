import { ADD_FEEDBACK } from './Actions';

const feedbackReducer = (state, action) => {
    switch (action.type) {
        case ADD_FEEDBACK:
            return {
                ...state,
                feedback: [...state.feedback, action.payload],
            };
        default:
            return state;
    }
};

export default feedbackReducer;
