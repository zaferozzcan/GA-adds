import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.onDelete(e.target.id);
  }

  render() {
    return (
      <div className="card-container">
        <div className="card-inner">
          {this.props.birds.map((bird, index) => {
            return (
              <div className="card">
                <button
                  id={index}
                  onClick={this.handleDelete}
                  className="card-remove-button"
                >
                  X
                </button>
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
