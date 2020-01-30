import React from 'react';
import { Link } from '@reach/router';
import StudentList from './StudentList';
import Student from './Student';

class Students extends React.Component {
	state = {
		student_list: []
	};

	render() {
		return (
			<main>
				<form>
					Add a new student:
					<input type="text" placeholder="student details" id="new_student_input" name="new_student_input" />
					<button value="submit_student">Submit</button>
				</form>
				<StudentList />
				<Student />
			</main>
		);
	}
}

export default Students;
