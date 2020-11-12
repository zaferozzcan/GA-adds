import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import FavoriteSongs from "./components/FavoriteSongs";

import playlist from "./data.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: playlist,
      title: "",
      artist: "",
      time: "0:00",
      lovedSongs: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addLovedSong = this.addLovedSong.bind(this);
  }

  addLovedSong(song) {
    this.setState({ lovedSongs: [...this.state.lovedSongs, song] });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDelete(index) {
    const newPlaylist = this.state.playlist;
    newPlaylist.splice(index, 1);
    this.setState({
      playlist: newPlaylist,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time,
    };

    const updatedSongs = [...this.state.playlist, newSong];

    this.setState({
      playlist: updatedSongs,
      title: "",
      artist: "",
      time: "0:00",
    });
  }

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Song
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="artist">
            Artist
            <input
              type="text"
              id="artist"
              value={this.state.artist}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="time">
            Time
            <input
              type="text"
              id="time"
              value={this.state.time}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
        <Playlist
          playlist={this.state.playlist}
          handleDelete={this.handleDelete}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
