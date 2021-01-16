import "./App.css";
import React, { Component } from "react";
import DivOne from "./components/DivOne";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: {
        name: "Time and Relative Dimension in Space",
        caps: false,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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
      <div>
        <DivOne tardis={this.state.tardis} onClickOnApp={this.handleClick} />
      </div>
    );
  }
}
