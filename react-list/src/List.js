import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      users: []
    };
  }

  render() {
    return (
      <table id="list">
        <thead>
          <tr className="head-row">
            <th>First name</th>
            <th>Email</th>
            <th>Subscription</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{this.props.user}</tbody>
      </table>
    );
  }
}

export default List;
