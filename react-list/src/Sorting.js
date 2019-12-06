import React, { Component } from "react";

class Sorting extends Component {
  render() {
    return (
      <label id="house-selector">
        Sort by
        <select
          name="house-filter"
          id="house-filter"
          onChange={this.props.sortList}
        >
          <option value="none" hidden disabled selected value></option>
          <option value="Name">name</option>
          <option value="Email">e-mail</option>
        </select>
      </label>
    );
  }
}

export default Sorting;
