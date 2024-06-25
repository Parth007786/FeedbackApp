import { createContext, useReducer } from 'react';
import feedbackReducer from './Reducer';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
    const initialState = {
        feedback: [],
    };

    const [state, dispatch] = useReducer(feedbackReducer, initialState);

    return (
        <FeedbackContext.Provider value={{ state, dispatch }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export { FeedbackContext, FeedbackProvider };
