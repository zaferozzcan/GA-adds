import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state({
      user: [],
    });
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={submit}>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}
