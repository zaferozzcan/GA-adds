import React, { Component } from "react";
const fetchURL = "http://localhost:3003/bookmarks";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
    this.loadBookmarks = this.loadBookmarks.bind(this);
  }
  componentDidMount() {
    this.loadBookmarks();
  }

  loadBookmarks() {
    fetch(fetchURL)
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({
          bookmarks: parsedData,
        });
      });
  }
  render() {
    console.log(this.state.bookmarks);
    return <div></div>;
  }
}
