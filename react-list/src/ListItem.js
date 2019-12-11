import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const newStyle = {
      display: "none"
    };

    return (
      <tr
        key={this.props.user._id}
        style={
          this.props.user.isDeleted || this.props.user.isHidden
            ? newStyle
            : null
        }
        // style={this.props.user.isHidden ? newStyle : null}
      >
        <td data-field="name">{this.props.user.Name}</td>
        <td data-field="email">{this.props.user.Email}</td>
        <td data-field="id">{this.props.user._id}</td>
        <td data-field="activated">
          {this.props.user.isActivated ? "yes" : "no"}
        </td>
        <button
          className="delete delete-column"
          onClick={() => this.props.deleteRecord(this.props.user._id)}
          id={this.props.user._id}
        >
          &#10005;
        </button>
      </tr>
    );
  }
}

export default ListItem;
