import React from 'react';
import Stats from './Stats';
import '../App.css';

const Home = () => {
	return (
		<main id="home">
			<p id="welcomeMessage">Welcome to the Northcoders Coder admin database. Happy searching. </p>
			<img
				className="homePageIMG"
				src="https://pbs.twimg.com/media/Dc6Z6GbWkAELnoS.png"
				alt="Love Northcoders Logo"
			/>
			<Stats />
		</main>
	);
};

export default Home;
