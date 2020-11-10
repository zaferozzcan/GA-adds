import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            id="item"
            onChange={this.handleChange}
            value={this.state.item}
            placeholder="item"
          />
          <input
            id="brand"
            onChange={this.handleChange}
            name="brand"
            value={this.state.brand}
            placeholder="brand"
          />
          <input
            id="units"
            onChange={this.handleChange}
            name="units"
            value={this.state.units}
            placeholder="units"
          />
          <input
            id="quantity"
            onChange={this.handleChange}
            name="quantity"
            value={this.state.quantity}
            placeholder="quantity"
          />
          <input type="submit" value="Add Item" />
        </form>
        ;
      </div>
    );
  }
}
