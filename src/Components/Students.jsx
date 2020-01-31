import React from "react";
import StudentList from "./StudentList";
import Student from "./Student";
import SearchBar from "./SearchBar";
import axios from "axios";
import AddStudent from "./AddStudent";

class Students extends React.Component {
  state = {
    student_list: [],
    display_student: {
      name: "",
      startingCohort: "",
      blockHistory: [{ name: "" }]
    },
    graduating_students: []
  };

  render() {
    return (
      <main>
        <SearchBar searchResults={this.searchResults} />
        <AddStudent addNewStudent={this.addNewStudent} />
        <Student display_student={this.state.display_student} />
        <StudentList
          student_list={this.state.student_list}
          selectStudent={this.selectStudent}
          addToGraduating={this.addToGraduating}
        />
      </main>
    );
  }

  componentDidMount() {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students?sort_by=name")
      .then(res => {
        this.setState({ student_list: res.data.students });
      });
  }

  searchResults = ({ search_input, block_input, cohort_input }) => {
    if (block_input === "Block") block_input = "";
    if (cohort_input === "Cohort") cohort_input = "";
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students?block=${block_input}&cohort=${cohort_input}&sort_by=name&order=asc`
      )
      .then(res => {
        console.log("submit");
        this.setState({ student_list: res.data.students });
      })
      .catch(() => {
        console.log("error");
      });
  };

  addNewStudent = ({ new_student_input, new_student_cohort_input }) => {
    axios
      .post("https://nc-student-tracker.herokuapp.com/api/students", {
        name: new_student_input,
        startingCohort: new_student_cohort_input
      })
      .then(res => {
        this.setState(currentState => {
          return {
            student_list: [...currentState.student_list, res.data.student]
          };
        });
      });
  };

  selectStudent = event => {
    event.preventDefault();
    const { name } = event.target;
    axios
      .get(`https://nc-student-tracker.herokuapp.com/api/students/${name}`)
      .then(res => {
        console.log(res.data.student);
        this.setState({ display_student: res.data.student });
      });
  };

  addToGraduating = event => {
    const newStudent = event.target.value;
    this.setState(currentState => {
      if (
        currentState.graduating_students.filter(
          student => student === newStudent
        ).length === 0
      ) {
        return {
          graduating_students: [...currentState.graduating_students, newStudent]
        };
      } else
        return {
          graduating_students: currentState.graduating_students.filter(
            student => student !== newStudent
          )
        };
    });
  };
}

export default Students;
