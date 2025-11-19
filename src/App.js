import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout';
function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure? ')) {
			setFeedback((prevFeedback) => prevFeedback.filter((item) => item.id !== id));
		}
	};
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route
						index
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
							</>
						}
					/>
					<Route path='about' element={<AboutPage />} />
				</Route>
			</Routes>
		</Router>
	);
}
export default App;
