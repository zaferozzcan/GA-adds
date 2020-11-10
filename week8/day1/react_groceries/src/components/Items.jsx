import React, { Component } from 'react'

export default class Items extends Component {
    constructor(props){
        super(props)
        this.state=[
            {
                item: 'Beer',
                brand: 'Budwiser',
                units: '12pk',
                quantity: 2,
                isPurchased: false
              },
              {
                item: 'Soda',
                brand: 'Pepsi',
                units: '2lt',
                quantity: 7,
                isPurchased: false
              },
              {
                item: 'Cookie',
                brand: 'Oreo',
                units: '12pk',
                quantity: 4,
                isPurchased: false
              }
        ]
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({
          [event.target.id]: event.target.value,
        });
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
          products: [ ...this.state.products, newItem ],
          name: '',
          price: 0,
          description: '',
        });
      }

    render() {
        return (
            <div>
                <div>
                    <h1>Shopping List</h1>
                </div>
                <form className="shopping-list-form" >
                    <input onChange={this.handleChange} name="item" value={this.state.item} placeholder="item"/>
                    <input onChange={this.handleChange} name="brand" value={this.state.brand} placeholder="brand"/>
                    <input onChange={this.handleChange} name="units" value={this.state.units} placeholder="units"/>
                    <input onChange={this.handleChange} name="quantity" value={this.state.quantity} placeholder="quantity"/>
                    <input type="submit" value="Add Item" />
                </form>
                <br/><br/>
                <hr/><hr/>
                <h1>List Items</h1>
                <div className="shopping-list-container">
                    {this.state.map(item=>{
                        return (
                            <div className="items">
                                <div className="item-inner" >
                                    <button className="remove-button" type="button">X</button>
                                   <table>
                                       <tr>
                                           <td><span>Item</span></td>
                                           <td>{item.item}</td>
                                       </tr>
                                       <tr>
                                           <td><span>Brand</span></td>
                                           <td>{item.brand}</td>
                                       </tr>
                                       <tr>
                                           <td><span>Units</span></td>
                                           <td>{item.units}</td>
                                       </tr>
                                       <tr>
                                           <td><span>Quantity</span></td>
                                           <td>{item.quantity}</td>
                                       </tr>
                                   </table>
                                </div>
                            </div> 
                        )
                    })}
                </div>
            </div>
        )
    }
}
