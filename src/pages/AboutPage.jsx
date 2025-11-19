import { Link } from 'react-router-dom';

const AboutPage = () => {
	return (
		<div className='card'>
			<h1>About This Project</h1>
			<p>
				This is a simple React application for leaving product feedback. It demonstrates component composition,
				state management, animations, and now client-side routing.
			</p>
			<p>
				<Link to='/'>Back to Home</Link>
			</p>
		</div>
	);
};

export default AboutPage;
