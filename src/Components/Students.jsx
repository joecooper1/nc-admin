import React from 'react';
import { Link } from '@reach/router';
import StudentList from './StudentList';
import Student from './Student';
import SearchBar from './SearchBar';
import axios from 'axios';

class Students extends React.Component {
	state = {
		student_list: []
	};

	render() {
		return (
			<main>
				<SearchBar />
				<form>
					Add a new student:
					<input type="text" placeholder="student details" id="new_student_input" name="new_student_input" />
					<button value="submit_student">Submit</button>
				</form>
				<StudentList student_list={this.state.student_list} />
				<Student />
			</main>
		);
	}
	componentDidMount() {
		axios.get('https://nc-student-tracker.herokuapp.com/api/students').then((res) => {
			return this.setState({ student_list: res.students });
		});
	}
}

export default Students;
