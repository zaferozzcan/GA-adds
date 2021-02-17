import React, { Component } from "react";
import ToDo from "./components/toDos";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }
  render() {
    return <div>items={this.state.items} /></div>;
  }
}
