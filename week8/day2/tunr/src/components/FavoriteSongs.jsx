import React, { Component } from "react";

export default class FavoriteSongs extends Component {
  render() {
    return (
      <div>
        <thead>
          <tr>
            <td>Song</td>
            <td>Artist</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {this.props.songs.map((song, index) => {
            return (
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.time}</td>
              </tr>
            );
          })}
        </tbody>
      </div>
    );
  }
}
