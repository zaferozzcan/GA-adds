import React, { Component } from "react";

class DivFour extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnH3 = this.handleClickOnH3.bind(this);
  }
  handleClickOnH3() {
    this.props.handleClickOnDivFour();
  }
  render() {
    return (
      <div onClick={this.handleClickOnH3}>
        <h3>{this.props.tardis.name}</h3>
      </div>
    );
  }
}
export default DivFour;
