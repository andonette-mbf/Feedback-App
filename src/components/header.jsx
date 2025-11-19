import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};
	return (
		<header style={headerStyles}>
			<div className='container header-content'>
				<h2>{text}</h2>
				<nav aria-label='Primary navigation'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
				</nav>
			</div>
		</header>
	);
}

Header.defaultProps = { text: 'Feedback UI', bgColor: 'rgba(0, 0, 0, 0.4)', textColor: '#ff5a96' };
Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};
export default Header;
