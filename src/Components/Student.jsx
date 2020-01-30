import React from 'react';
import { Link } from '@reach/router';

const Student = () => {
	return (
		<main>
			<p> Student Name:</p>
			<br />
			<p> Cohort:</p>
			<br />
			<label>
				{' '}
				Block:
				<select placeholder="Block">
					<option value="fun">Fundamentals</option>
					<option value="fe">Front-End</option>
					<option value="be">Back-End</option>
					<option value="proj">Project</option>
					<option value="grad">Graduated</option>
				</select>
			</label>
			<br />
			<button value="remove_student_button">Remove Student</button>
		</main>
	);
};

export default Student;
