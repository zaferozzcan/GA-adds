import React, { Component } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
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
    return (
      <div>
        <div className="container">
          <Header />
          <div className="form-group">
            <form>
              <fieldset>
                <legend>Add More Bookmark</legend>

                <input
                  onChange={this.handleChange}
                  id="title"
                  placeholder="name"
                  value=""
                ></input>

                <input
                  onChange={this.handleChange}
                  id="url"
                  placeholder="http://..."
                  value=""
                ></input>
              </fieldset>
            </form>
          </div>
          <Items items={this.state.bookmarks} />
        </div>
      </div>
    );
  }
}
