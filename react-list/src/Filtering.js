import React, { Component } from "react";
import FilteringOption from "./FilteringOption.js";

class Filtering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
  }
  render() {
    return (
      <div className="filtering">
        <span>Activated</span>
        <FilteringOption value="yes" filterList={this.props.filterList} />
        <FilteringOption value="no" filterList={this.props.filterList} />
        <FilteringOption value="all" filterList={this.props.filterList} />
      </div>
    );
  }
}

export default Filtering;
