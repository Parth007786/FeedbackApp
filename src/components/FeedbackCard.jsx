
import PropTypes from 'prop-types';
import RatingStars from './RatingStar';

const FeedbackCard = ({ feedback }) => {
    let cardStyle = {};

    if (feedback.rating <= 2) {
        cardStyle.backgroundColor = 'red';
        cardStyle.color = 'white';
        cardStyle.fontSize = '25px';
    } else if (feedback.rating <= 4) {
        cardStyle.backgroundColor = 'purple';
        cardStyle.color = 'white';
        cardStyle.fontSize = '25px';  // Adjust text color for readability
    } else {
        cardStyle.backgroundColor = 'green';
        cardStyle.color = 'white';
        cardStyle.fontSize = '25px';
    }

    return (
        <div className="feedback-card" style={cardStyle}>
            <p>{feedback.text}</p>
            <RatingStars rating={feedback.rating} readonly={true} />
        </div>
    );
};

FeedbackCard.propTypes = {
    feedback: PropTypes.shape({
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default FeedbackCard;
