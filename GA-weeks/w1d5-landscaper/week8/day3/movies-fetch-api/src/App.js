import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      baseURL: "http://www.omdbapi.com/?",
      apikey: "apikey=6253ae12",
      query: "&t=",
      movieTitle: "",
      searchURL: "",
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.apikey +
          this.state.query +
          this.state.movieTitle,
      },
      () => {
        console.log(this.state.searchURL);
        fetch(this.state.searchURL)
          .then((response) => {
            return response.json();
          })
          .then(
            (json) =>
              this.setState({
                movie: json,
              }),
            (err) => console.log(err)
          );
      }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="movieTitle">Title</label>
          <input
            id="movieTitle"
            type="text"
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input type="submit" value="Find Movie Info" />
        </form>
        <a href={this.state.searchURL}>{this.state.searchURL}</a>
      </div>
    );
  }
}
