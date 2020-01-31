import React from 'react';

const StudentList = ({ student_list, selectStudent, addToGraduating, graduateStudents }) => {
	return (
		<main>
			<h1>List of students:</h1>
			<form onSubmit={graduateStudents}>
				{student_list.map((student) => {
					return (
						<label key={student._id}>
							<button onClick={selectStudent} name={student._id}>
								{student.name}, cohort:{student.startingCohort}, block:
								{student.currentBlock}
							</button>
							<input type="checkbox" value={student._id} name={student.name} onChange={addToGraduating} />
						</label>
					);
				})}
				<button>Graduate selected</button>
			</form>
		</main>
	);
};

export default StudentList;
