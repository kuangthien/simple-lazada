import React, { Component } from "react";
import logo from "./logo.svg";
import "./assets/styles/App.scss";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    axios
      .get(process.env.REACT_APP_PATH_API + "test-api")

      .then(result => {
        const { success } = result.data;
        return this.setState({
          success
        });
      })
      .catch(error =>
        this.setState({
          error
        })
      );
  }
  render() {
    const printState = JSON.stringify(this.state);
    return (
      <div className="App">
        <div className="container">
          Test API:
          {printState}
          <div className="row">
            <div className="col">Test grid</div>
            <div className="col">Test grid</div>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
