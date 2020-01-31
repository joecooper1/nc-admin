import React from "react";

const StudentList = ({
  student_list,
  selectStudent,
  addToGraduating,
  graduateStudents
}) => {
  return (
    <main id="studentList">
      <h1>List of students:</h1>
      <form onSubmit={graduateStudents} id="studentList">
        <button id="graduate">Graduate selected</button>
        {student_list.map(student => {
          return (
            <label key={student._id}>
              <button onClick={selectStudent} name={student._id}>
                {student.name}, cohort:{student.startingCohort}, block:
                {student.currentBlock}
              </button>
              <input
                type="checkbox"
                value={student._id}
                name={student.name}
                onChange={addToGraduating}
              />
            </label>
          );
        })}
      </form>
    </main>
  );
};

export default StudentList;
