
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <FeedbackForm />
            <FeedbackList />
        </div>
    );
};

export default Home;
