import React, { Component } from "react";

export default class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      love: false,
    };
    this.toggleLove = this.toggleLove.bind(this);
  }

  toggleLove() {
    this.setState({ love: !this.state.love });
  }

  render() {
    return (
      <tr
        onClick={() => {
          this.props.addLovedSong(this.props.song);
          this.toggleLove();
        }}
        key={this.props.index}
      >
        <td onDoubleClick={() => this.props.handleDelete(this.props.index)}>
          {this.props.song.title}
        </td>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.time}</td>
        {this.state.love ? <td>&hearts;</td> : <td></td>}
      </tr>
    );
  }
}
