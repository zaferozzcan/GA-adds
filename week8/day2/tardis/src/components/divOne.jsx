import React, { Component } from "react";

class DivOne extends Component {
  constructor(props) {
    super(props);
    this.handleClickDivOne = this.handleClickDivOne.bind(this);
  }
  handleClickDivOne() {
    this.props.onClickDivOne();
  }
  render() {
    console.log(this.props.tardis.name);
    return (
      <div onClick={this.handleClickDivOne}>
        <h3>{this.props.tardis.name}</h3>
      </div>
    );
  }
}
export default DivOne;
