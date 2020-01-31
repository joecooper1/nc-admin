import React from "react";

const StudentList = ({ student_list, selectStudent, addToGraduating }) => {
  return (
    <main>
      <h1>List of students:</h1>
      <form>
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
      <button>Graduate selected</button>
    </main>
  );
};

export default StudentList;
