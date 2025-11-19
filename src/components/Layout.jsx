import { Outlet } from 'react-router-dom';
import Header from './Header';
import AboutIconLink from './AboutIconLink';

function Layout() {
	return (
		<>
			<Header />
			<div className='container'>
				<Outlet />
				<AboutIconLink />
			</div>
		</>
	);
}

export default Layout;
