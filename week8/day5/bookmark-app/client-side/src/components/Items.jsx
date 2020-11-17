import React, { Component, Fragment } from "react";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(index) {
    this.props.handleDelete(index);
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {this.props.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>
                    <form>
                      <button
                        type="submit"
                        onClick={() => this.onDelete(index)}
                      >
                        x
                      </button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// {
//   this.props.items.map((item, index) => {
//     <div className="hello">
//       <tr id={index}>
//         <td>{item.title}</td>
//       </tr>
//       <button>x</button>
//     </div>;
//   });
// }
