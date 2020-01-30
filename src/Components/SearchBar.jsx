import React from 'react';
import { Link } from '@reach/router';

class SearchBar extends React.Component {
	state = {
		search_input: '',
		block_input: 'all',
		cohort_input: 'all'
	};

	render() {
		return (
			<form>
				<label>
					Search:
					<select placeholder="Block">
						<option>Block</option>
						<option value="fun">Fundamentals</option>
						<option value="fe">Front-End</option>
						<option value="be">Back-End</option>
						<option value="proj">Project</option>
						<option value="grad">Graduated</option>
					</select>
					<select>
						<option>Cohort</option>
						{[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ].map((value) => {
							return <option value={value}>{value}</option>;
						})}
					</select>
					<input type="text" id="search_bar" placeholder="search here" name="search_bar" />
					<button id="submit_button" name="submit_button">
						Go!
					</button>
				</label>
			</form>
		);
	}
}

export default SearchBar;
