import React from "react";
import StudentList from "./StudentList";
import Student from "./Student";
import SearchBar from "./SearchBar";
import axios from "axios";
import AddStudent from "./AddStudent";
import "../App.css";

class Students extends React.Component {
  state = {
    student_list: [],
    display_student: {
      name: "",
      startingCohort: "",
      blockHistory: [{ name: "" }]
    },
    graduating_students: [],
    just_graduated: []
  };

  render() {
    return (
      <main id="students">
        <SearchBar searchResults={this.searchResults} />
        <AddStudent addNewStudent={this.addNewStudent} />
        <Student display_student={this.state.display_student} />
        <StudentList
          student_list={this.state.student_list}
          selectStudent={this.selectStudent}
          addToGraduating={this.addToGraduating}
          graduateStudents={this.graduateStudents}
        />
      </main>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.just_graduated.length > prevState.just_graduated.length)
      axios
        .get(
          "https://nc-student-tracker.herokuapp.com/api/students?sort_by=name"
        )
        .then(res => {
          this.setState({ student_list: res.data.students });
        });
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
        this.setState({ display_student: res.data.student });
      });
  };

  graduateStudents = event => {
    event.preventDefault();
    this.state.graduating_students.map(student =>
      axios
        .patch(
          `https://nc-student-tracker.herokuapp.com/api/students/${student}?progress=true`
        )
        .then(res => {
          this.setState(currentState => {
            return {
              just_graduated: [...currentState.just_graduated, res.data.student]
            };
          });
          this.setState({ graduating_students: [] });
          document
            .querySelectorAll("input[type=checkbox]")
            .forEach(el => (el.checked = false));
        })
    );
  };

  addToGraduating = event => {
    const newStudent = event.target.value;
    const check = event.target.checked;
    this.setState(currentState => {
      if (check === true) {
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
