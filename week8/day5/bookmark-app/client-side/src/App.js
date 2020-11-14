import React, { Component } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
const fetchURL = "http://localhost:3003/bookmarks";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      title: "",
      url: "",
    };
    this.loadBookmarks = this.loadBookmarks.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.loadBookmarks();
  }

  // update state on change
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  // click handler
  handleClick() {
    fetch(fetchURL, {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        url: this.state.url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        this.props.handleAddHoliday(resJson);
        this.setState({
          title: "",
          url: "",
        });
      })
      .catch((error) => console.error({ Error: error }));
  }

  // get data from backend
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
    console.log(this.state.title, this.state.url);
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
                  value={this.state.title}
                ></input>

                <input
                  onChange={this.handleChange}
                  id="url"
                  placeholder="http://..."
                  value={this.state.url}
                ></input>
                <button onClick={this.handleClick} type="submit">
                  Add
                </button>
              </fieldset>
            </form>
          </div>
          <Items items={this.state.bookmarks} />
        </div>
      </div>
    );
  }
}
