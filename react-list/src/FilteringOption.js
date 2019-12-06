import React, { Component } from "react";

class FilteringOption extends Component {
  render() {
    return (
      <label className="filtering" htmlFor={this.props.value}>
        <input
          type="radio"
          name="subscriber"
          value={this.props.value}
          id={this.props.value}
          onChange={this.props.filterList}
        />
        {this.props.value}
      </label>
    );
  }
}

export default FilteringOption;
