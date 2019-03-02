import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Route } from "react-router-dom";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Category from "./components/pages/Category";
import Home from "./components/pages/Home";

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);
class App extends Component {
  render() {
    return (
      <Fragment>
        <Top />
        <div className="my-4">
          <Route path="/products" component={Category} />
          <Route path="/" exact component={Home} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default AppWrapper;
