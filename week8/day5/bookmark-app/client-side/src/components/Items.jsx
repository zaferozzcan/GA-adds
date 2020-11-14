import React, { Component, Fragment } from "react";

export default class Items extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {this.props.items.map((item, index) => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>
                    <button>x</button>
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
