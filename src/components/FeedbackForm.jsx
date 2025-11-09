import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const handleTextChange = (e) => {
		const inputValue = e.target.value;
		setText(inputValue);

		if (inputValue.trim().length === 0) {
			setBtnDisabled(true);
			setMessage(null);
		} else if (inputValue.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters');
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
	};
	return (
		<Card>
			<form>
				<h2>How would you rate your service with us</h2>
				{/*Todo - ratings select component*/}
				<div className='input-group'>
					<input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
