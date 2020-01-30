import React from 'react';
import { Link } from '@reach/router';
import Stats from './Stats';

const Home = () => {
	return (
		<main>
			<p>Welcome to the Northcoders Coder admin database. Happy searching. </p>
			<img src="https://pbs.twimg.com/media/Dc6Z6GbWkAELnoS.png" alt="Love Northcoders Logo Image" />
			<Stats />
		</main>
	);
};

export default Home;
