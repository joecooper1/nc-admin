import React from "react";

class Stats extends React.Component {
  state = {
    students: []
  };

  render() {
    return (
      <main>
        <h2>Total students:</h2>
        <ul>
          <li>
            Fundamentals:
            <br />
            Average grad rate:
          </li>
          <br />
          <li>
            Back-End:
            <br />
            Average grad rate:
          </li>
          <br />
          <li>
            Front-End:
            <br />
            Average grad rate:
          </li>
          <br />
          <li>
            Project:
            <br />
            Average grad rate:
          </li>
          <li>
            Graduated:
            <br />
            Average grad time:
          </li>
        </ul>
        <p>PATHWAYS</p>
      </main>
    );
  }
}

export default Stats;
