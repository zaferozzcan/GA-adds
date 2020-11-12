import React, { Component } from "react";

export default class ListItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item, index) {
    this.props.restore(
      {
        piece: `Paint ${item.piece} white`,
        recommendationMade: !item.recommendationMade,
      },
      index
    );
  }

  render() {
    return (
      <div>
        {this.props.furniture.map((item, index) => {
          return (
            <li key={index}>
              {item.piece}{" "}
              {item.recommendationMade === false ? (
                <button
                  onClick={() => {
                    this.handleClick(item, index);
                  }}
                  style={{ backgroundColor: "maroon", color: "white" }}
                >
                  Recommendation
                </button>
              ) : null}
            </li>
          );
        })}
      </div>
    );
  }
}
