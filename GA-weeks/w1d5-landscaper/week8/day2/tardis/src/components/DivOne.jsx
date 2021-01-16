import React, { Component } from "react";
import DivTwo from "./DivTwo";

class DivOne extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnDivOne = this.handleClickOnDivOne.bind(this);
  }

  handleClickOnDivOne() {
    this.props.onClickOnApp();
  }

  render() {
    return (
      <div>
        <DivTwo
          tardis={this.props.tardis}
          handleClickOnDivTwo={this.handleClickOnDivOne}
        />
      </div>
    );
  }
}
export default DivOne;
