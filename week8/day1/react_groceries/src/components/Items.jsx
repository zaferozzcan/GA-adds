import React, { Component } from "react";

const items = [
  {
    item: "Beer",
    brand: "Budwiser",
    units: "12pk",
    quantity: 2,
    isPurchased: false,
  },
  {
    item: "Soda",
    brand: "Pepsi",
    units: "2lt",
    quantity: 7,
    isPurchased: false,
  },
  {
    item: "Cookie",
    brand: "Oreo",
    units: "12pk",
    quantity: 4,
    isPurchased: false,
  },
];

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      item: "",
      brand: "",
      units: "",
      quantity: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
    console.log("state", this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
    };
    this.setState({
      items: [...this.state.items, newItem],
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Shopping List</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="shopping-list-form">
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
        <br />
        <br />
        <hr />
        <hr />
        <h1>List Items</h1>
        <div className="shopping-list-container">
          {this.state.items.map((item, index) => {
            console.log(item);
            return (
              <div className="items">
                <div className="item-inner">
                  <button className="remove-button" type="button">
                    X
                  </button>
                  <table>
                    <tr>
                      <td>
                        <span>Item</span>
                      </td>
                      <td>{item.item}</td>
                    </tr>
                    <tr>
                      <td>
                        <span>Brand</span>
                      </td>
                      <td>{item.brand}</td>
                    </tr>
                    <tr>
                      <td>
                        <span>Units</span>
                      </td>
                      <td>{item.units}</td>
                    </tr>
                    <tr>
                      <td>
                        <span>Quantity</span>
                      </td>
                      <td>{item.quantity}</td>
                    </tr>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
