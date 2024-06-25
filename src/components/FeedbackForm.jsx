import { useState, useContext } from 'react';
import { FeedbackContext } from '../providers/Context';
import { addFeedback } from '../providers/Actions';
import RatingStars from './RatingStar';
import '../components/FeedbackForm.css';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(0);
    const { dispatch } = useContext(FeedbackContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '' || rating === 0) return;

        const newFeedback = { text, rating };
        dispatch(addFeedback(newFeedback));
        setText('');
        setRating(0);
    };

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <h2 className='headCard'>Give us your feedback</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your feedback"
                className="feedback-textarea"
            ></textarea>
            <div className="rating-container">
                <label>Rating:</label>
                <RatingStars rating={rating} setRating={setRating} />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default FeedbackForm;
