import React, { Component } from "react";
import { Button } from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
    console.log("handleCount");
  }

  render() {
    console.log("render");
    return (
      
      <div>
        <h1>Current count: {this.state.count}</h1>
        <hr />
        <Button
          sign="+"
          count={this.state.count}
          updateCount={this.handleCount.bind(this)}
        />
        <Button
          sign="-"
          count={this.state.count}
          updateCount={this.handleCount.bind(this)}
        />
      </div>
    );
  }
}

export default App;
