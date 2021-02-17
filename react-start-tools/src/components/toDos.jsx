import React from "react";
import "../App.css";
export default class ToDo extends React.Component {
  constructor(props) {
    super();
    this.handleCheck = this.bind.handleCheck()
  }
  render() {
    console.log(this.props.item);
    handleCheck(){
        
    }
    return (
      <div>
        <h1>To Do List</h1>
        <ul style={{ listStyleType: "none" }}>
          {this.props.items.map((item, index) => {
            return (
              <li key={index}>
                <label>
                  <input
                    onClick={() => handleCheck(item.done)}
                    type="checkbox"
                    checked={item.done}
                  />
                  <span className={item.done && "done"}>{item.text}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
