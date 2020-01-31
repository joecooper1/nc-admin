import React from "react";
import axios from "axios";

class Student extends React.Component {
  state = {
    deleted: ""
  };

  render() {
    return (
      <main>
        <p> Student Name: {this.props.display_student.name}</p>
        <br />
        <p> Cohort: {this.props.display_student.startingCohort}</p>
        <br />
        <p>
          {" "}
          Block:{" "}
          {
            this.props.display_student.blockHistory[
              this.props.display_student.blockHistory.length - 1
            ].name
          }
        </p>{" "}
        <br />
        <br />
        <button value="remove_student_button" onClick={this.removeStudent}>
          Remove Student
        </button>
        <p>{this.state.deleted}</p>
      </main>
    );
  }

  removeStudent = () => {
    axios
      .delete(
        `https://nc-student-tracker.herokuapp.com/api/students/${this.props.display_student._id}`
      )
      .then(res => {
        this.setState({ deleted: "Student expelled!" });
      });
  };
}

export default Student;
