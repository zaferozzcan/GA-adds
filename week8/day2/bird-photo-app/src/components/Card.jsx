import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-inner">
          {this.props.birds.map((bird, index) => {
            return (
              <div id={index} className="card">
                <button className="card-remove-button">X</button>
                <p className="card-header">{bird.birdName}</p>
                <small>📸 by {bird.user}</small>
                <img src={bird.image} alt={bird.birdName} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
