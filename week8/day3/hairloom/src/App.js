import React, { Component } from "react";
import ListItem from "./components/ListItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      furniture: [
        {
          piece: "Grandma's Favorite Chair",
          recommendationMade: false,
          id: 1,
        },
        {
          piece: "Grand Armoire",
          recommendationMade: false,
          id: 2,
        },
        {
          piece: "Fainting Couch",
          recommendationMade: false,
          id: 3,
        },
        {
          piece: "Fabergé Egg",
          recommendationMade: false,
          id: 4,
        },
      ],
    };
    this.restore = this.restore.bind(this);
  }

  restore(item, index) {
    this.setState([...this.state.furniture.splice(index, 1, item)]);
  }

  render() {
    console.log(this.state.furniture);
    return (
      <div>
        <h1>Hairloom Furniture Class</h1>
        <ul>
          <ListItem restore={this.restore} furniture={this.state.furniture} />
        </ul>
      </div>
    );
  }
}
