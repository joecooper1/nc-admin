import React from 'react';
import { Link } from '@reach/router';

class Stats extends React.Component {
	state = {
		students: []
	};

	render() {
		return (
			<main>
				<h2>Total students:</h2>
				<ul>
					<li>
						Fundamentals:
						<br />
						Average grad rate:
					</li>
					<br />
					<li>
						Back-End:
						<br />
						Average grad rate:
					</li>
					<br />
					<li>
						Front-End:
						<br />
						Average grad rate:
					</li>
					<br />
					<li>
						Project:
						<br />
						Average grad rate:
					</li>
				</ul>
			</main>
		);
	}
}

export default Stats;
