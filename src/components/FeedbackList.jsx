import { useContext } from 'react';
import { FeedbackContext } from '../providers/Context';
import FeedbackCard from './FeedbackCard';

const FeedbackList = () => {
    const { state } = useContext(FeedbackContext);

    return (
        <div className="feedback-list">
            <h2>Feedback List</h2>
            {state.feedback.length === 0 ? (
                <p>No feedback yet</p>
            ) : (
                state.feedback.map((fb, index) => (
                    <FeedbackCard key={index} feedback={fb} />
                ))
            )}
        </div>
    );
};

export default FeedbackList;
