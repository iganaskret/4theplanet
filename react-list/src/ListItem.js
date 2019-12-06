import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const newStyle = {
      display: "none"
    };

    return (
      <tr
        key={this.props.user._id}
        style={this.props.user.isDeleted ? newStyle : null}
        style={this.props.user.isHidden ? newStyle : null}
      >
        <td data-field="name">{this.props.user.Name}</td>
        <td data-field="email">{this.props.user.Email}</td>
        <td data-field="subscription">
          {this.props.user.Subscriber ? "yes" : "no"}
        </td>
        <button
          className="delete"
          onClick={() => this.props.deleteRecord(this.props.user._id)}
          id={this.props.user._id}
        >
          delete
        </button>
      </tr>
    );
  }
}

export default ListItem;
