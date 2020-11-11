import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdName: "",
      image: "",
      user: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("state in handle submit", this.state);
    this.props.onAdd(this.state);
    this.setState({
      birdName: "",
      image: "",
      user: "",
    });
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            id="birdName"
            placeholder=" bird-name"
            value={this.state.birdName}
            onChange={this.handleChange}
          />
          <input
            id="image"
            placeholder=" image"
            onChange={this.handleChange}
            value={this.state.image}
          />
          <input
            id="user"
            placeholder=" Pictured by?"
            onChange={this.handleChange}
            value={this.state.user}
          />
          <button type="submit">Add Photo</button>
        </form>
      </div>
    );
  }
}
