import React from 'react';
import { Link } from '@reach/router';
import '../App.css';

const Header = () => {
	return (
		<header id="header">
			<Link to="/" className="removeUnderline">
				<p>NC ADMIN DATABASE</p>
			</Link>
			<nav>
				<Link to="/" className="removeUnderline">
					<p>Home</p>
				</Link>
				<Link to="/students" className="removeUnderline">
					<p>Search students</p>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
