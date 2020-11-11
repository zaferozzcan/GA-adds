import "./App.css";
import React, { Component } from "react";

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
    console.log("div got clicked");
  }

  render() {
    return (
      <div onClick={this.handleClick} className="container">
        {this.state.tardis.name}
      </div>
    );
  }
}
