import React, { Component } from "react";
import DivThree from "./DivThree";
import DivFour from "./DivFour";

class DivTwo extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnDivTwo = this.handleClickOnDivTwo.bind(this);
  }

  handleClickOnDivTwo() {
    this.props.handleClickOnDivTwo();
  }

  render() {
    return (
      <div>
        <DivThree
          tardis={this.props.tardis}
          handleClickOnDivThree={this.handleClickOnDivTwo}
        />
        <DivFour
          tardis={this.props.tardis}
          handleClickOnDivFour={this.handleClickOnDivTwo}
        />
      </div>
    );
  }
}
export default DivTwo;
