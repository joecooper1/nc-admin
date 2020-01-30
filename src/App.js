import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Home from './Components/Home';
import Students from './Components/Students';
import Stats from './Components/Stats';

function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<Home path="/" />
				<Students path="/students" />
			</Router>
		</div>
	);
}

export default App;
