import React, { Component } from "react";

class DivThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: this.props.tardis,
    };
    this.handleClickOnH3 = this.handleClickOnH3.bind(this);
  }
  handleClickOnH3() {
    const text = this.state.tardis.name;
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true,
        },
      });
    }
  }

  render() {
    return (
      <div onClick={this.handleClickOnH3}>
        <h3>{this.state.tardis.name}</h3>
      </div>
    );
  }
}
export default DivThree;
