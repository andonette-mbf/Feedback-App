import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
	if (!feedback || feedback.length === 0) {
		return <p>No feedback yet</p>;
	}
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
					>
						<FeedbackItem item={item} handleDelete={handleDelete} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			rating: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
};

export default FeedbackList;
