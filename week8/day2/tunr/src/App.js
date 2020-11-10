import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import playlist from "./data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: playlist,
      title: "",
      artist: "",
      time: "0.00",
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time,
    };
    console.log(newSong);
    const updatedPlaylist = [newSong, ...this.state.playlist];

    this.setState({
      playlist: updatedPlaylist,
      title: "",
      artist: "",
      time: "0:00",
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Song
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
              id="title"
            />
          </label>
          <label htmlFor="artist">
            Artist
            <input
              type="text"
              value={this.state.artist}
              onChange={this.handleChange}
              id="artist"
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

        <main>
          <div>
            <h3>Playlist 1</h3>
            <table>
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {this.state.playlist.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.artist}</td>
                      <td>{item.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  }
}
