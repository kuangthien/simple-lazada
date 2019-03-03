import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ProductDetail from "../components/ProductDetail/ProductDetail";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { articleList: [] };
    this.getData();
  }

  getData = () => {
    const { match } = this.props;
    const API_URL = process.env.REACT_APP_API_URL;
    axios.get(API_URL + "product/" + match.params.id).then(rs => {
      const articleList = rs.data;
      this.setState({ articleList });
    });
  };

  render() {
    const { match } = this.props;
    if (this.state.articleList.length === 0) {
      return null;
    }

    return <ProductDetail product={this.state.articleList} />;
  }
}

export default withRouter(Product);
