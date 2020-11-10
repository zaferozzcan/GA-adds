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

  render() {
    return (
      <div className="App">
        <Header />
        <form>
          <label htmlFor="title">
            Song
            <input type="text" id="title" />
          </label>
          <label htmlFor="artist">
            Artist
            <input type="text" id="artist" />
          </label>
          <label htmlFor="time">
            Time
            <input type="text" id="time" />
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
