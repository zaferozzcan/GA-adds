import React from "react";
const baseURL = "http://localhost:3003/holidays";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: [],
    };
    this.getHolidays = this.getHolidays.bind(this);
  }

  componentDidMount() {
    console.log("inside didMount");
    this.getHolidays();
  }

  getHolidays() {
    fetch(baseURL)
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({
          holidays: parsedData,
        });
      });
  }

  render() {
    console.log("in the render ", this.state.holidays);
    return (
      <div className="container">
        <h1>Holidays! Celebrate!</h1>
        {this.state.holidays.map((holiday) => {
          return <h1>{holiday.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
