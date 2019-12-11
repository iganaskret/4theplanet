import React, { Component } from "react";

class NewsletterListItem extends Component {
  render() {
    const newStyle = {
      display: "none"
    };

    return (
      <tr
        key={this.props.user._id}
        style={this.props.user.isDeleted ? newStyle : null}
        // style={this.props.email.isHidden ? newStyle : null}
      >
        <td data-field="email">{this.props.user.Email}</td>
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

export default NewsletterListItem;
