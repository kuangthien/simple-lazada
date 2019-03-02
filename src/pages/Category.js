import React, { Component } from "react";
import ArticleList from "./../components/ProductList/ProductList";
import PageLanding from "./../components/PageLanding";
class Articles extends Component {
  render() {
    return (
      <div className="">
        <PageLanding />

        <ArticleList />
      </div>
    );
  }
}

export default Articles;
