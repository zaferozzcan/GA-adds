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
    this.deleteBird = this.deleteBird.bind(this);
  }

  addBird(newBird) {
    console.log("newBird", newBird);
    const updatedBirds = [...this.state.birds, newBird];
    console.log("updatedBirds", updatedBirds);
    this.setState({
      birds: updatedBirds,
    });
  }

  deleteBird(index) {
    const newBirdList = this.state.birds;
    newBirdList.splice(index, 1);
    this.setState({
      birds: newBirdList,
    });
  }

  render() {
    console.log("birds in appjs", this.setState.birds);
    return (
      <div className="App">
        <Header />
        <Form onAdd={this.addBird} />
        <Card birds={this.state.birds} onDelete={this.deleteBird} />
      </div>
    );
  }
}
