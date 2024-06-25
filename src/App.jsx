
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { FeedbackProvider } from './providers/Context';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
