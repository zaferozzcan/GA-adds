import React, { Component } from "react";
import Song from "./Song";

export default class Playlist extends Component {
  render() {
    return (
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
            {this.props.playlist.map((song, index) => {
              return (
                <Song
                  song={song}
                  index={index}
                  handleDelete={this.props.handleDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
