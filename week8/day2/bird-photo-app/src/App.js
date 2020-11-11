import React, { Component } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import Header from "./components/Header";

import birds from "./data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: birds,
    };

    this.addBird = this.addBird.bind(this);
  }

  addBird(newBird) {
    console.log("newBird", newBird);
    const updatedBirds = [...this.state.birds, newBird];
    this.setState({
      birds: updatedBirds,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form onAdd={this.addBird} />
        <Card birds={this.state.birds} />
      </div>
    );
  }
}
