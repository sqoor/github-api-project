import React, { Component } from "react";

export class Row extends Component {
  render() {
    const {number} = this.props;
    const {name, language, html_url, full_name} = this.props.repo;

    return (
      <tr>
        <th scope="row">{number}</th>
        <td>{name}</td>
        <td>{language}</td>
        <td>
          <a
            style={{ width: "50%" }}
            className="btn btn-outline-dark"
            href={html_url}
            target="blank"
          >
            {full_name}
          </a>
        </td>
      </tr>
    );
  }
}

export default Row;
