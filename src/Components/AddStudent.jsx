import React from "react";

class AddStudent extends React.Component {
  state = {
    new_student_input: "",
    new_student_cohort_input: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="addBar">
        Add a new student:
        <input
          type="text"
          placeholder="student details"
          id="new_student_input"
          name="new_student_input"
          onChange={this.handleChange}
        />
        Cohort:
        <input
          type="number"
          step="1"
          name="new_student_cohort_input"
          onChange={this.handleChange}
        ></input>
        <button value="submit_student">Submit</button>
      </form>
    );
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNewStudent(this.state);
  };
}

export default AddStudent;
