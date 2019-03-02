import React, { Component } from "react";
// todo: make footer always bottom even short content case
export default class Footer extends Component {
  render() {
    return (
      <footer className="p-4 mt-md-5 p-md-4  bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12">Footer</div>
          </div>
        </div>
      </footer>
    );
  }
}
