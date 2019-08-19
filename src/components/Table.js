import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
  render() {
    const { repos } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">language</th>
              <th scope="col">url</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo, index) => {
              return (
               <Row key={repo.id} number={index + 1} repo={repo} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
