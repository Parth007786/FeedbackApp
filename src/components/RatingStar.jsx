
import PropTypes from 'prop-types';

const RatingStars = ({ rating, setRating, readonly }) => {
    return (
        <div className="rating-stars">
            {[...Array(5)].map((star, index) => (
                <span
                    key={index}
                    onClick={() => !readonly && setRating(index + 1)}
                    style={{ cursor: readonly ? 'default' : 'pointer', color: index < rating ? 'gold' : 'grey' }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
    setRating: PropTypes.func,
    readonly: PropTypes.bool,
};

RatingStars.defaultProps = {
    setRating: () => { },
    readonly: false,
};

export default RatingStars;
