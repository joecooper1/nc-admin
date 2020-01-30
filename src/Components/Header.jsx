import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
	return (
		<header>
			<Link to="/">NC ADMIN DATABASE</Link>;
			<nav>
				<Link to="/">Home</Link>
				<Link to="/students">Search students</Link>
			</nav>
		</header>
	);
};

export default Header;
