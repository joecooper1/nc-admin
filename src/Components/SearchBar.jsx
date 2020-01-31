import React from "react";

class SearchBar extends React.Component {
  state = {
    search_input: "",
    block_input: "",
    cohort_input: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search:
          <select
            placeholder="Block"
            onChange={this.handleChange}
            name="block_input"
            value={this.state.block_input}
          >
            <option>Block</option>
            <option value="fun">Fundamentals</option>
            <option value="fe">Front-End</option>
            <option value="be">Back-End</option>
            <option value="proj">Project</option>
            <option value="grad">Graduated</option>
          </select>
          <select
            name="cohort_input"
            onChange={this.handleChange}
            value={this.state.cohort_input}
          >
            <option>Cohort</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(value => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
          {/* <input
            type="text"
            id="search_bar"
            placeholder="search here"
            name="search_input"
            onChange={this.handleChange}
            value={this.state.search_input}
          /> */}
          <button id="submit_button" name="submit_button">
            Go!
          </button>
        </label>
      </form>
    );
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchResults(this.state);
  };
}

export default SearchBar;
