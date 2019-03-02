import React, { Component } from "react";
import moment from "moment";

import { withRouter } from "react-router-dom";
import axios from "axios";
import "./ProductList.scss";

import formatNumber from "./../../utils/format";

const API_URL = process.env.REACT_APP_API_URL;
const Item = props => {
  const { product, goToDetail } = props;
  const { regular, old, saleRatio } = product.prices;
  const { reviews } = product.additionalInfo;

  return (
    <div className="card mb-4 box-shadow border-0 product-item">
      <div className="card-img-top" alt="">
        <b
          className="img d-block"
          style={{
            backgroundImage: `url(${product.imageUrl})`
          }}
        />
      </div>

      <div className="card-body p-2">
        <p className="card-title font-weight-bold fz-12 fz-sm-16 fz-md-20">{product.title}</p>
        <div className="fz-14 fz-sm-18  ">
          <div className="text-danger font-weight-bold">{formatNumber(regular)} đ</div>
          <div className="text-muted">
            <del>{formatNumber(old)} đ</del>
          </div>
        </div>

        <a
          href={`/product/${product._id}`}
          onClick={e => {
            e.preventDefault();
            goToDetail();
          }}
          className="link"
        >
          &nbsp;
        </a>
      </div>
    </div>
  );
};

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: []
    };

    axios.get(API_URL + "products").then(rs => {
      const articleList = rs.data;
      this.setState({ articleList });
    });
  }

  render() {
    const { articleList } = this.state;
    if (articleList === 0) {
      return null;
    }
    let displayData = [];

    displayData = Array.from(articleList).slice(0, this.props.limit || 20);

    return (
      <div className="articleList my-4">
        <div className="container-fluid">
          <div className="row no-gutter">
            {displayData.map((v, i) => {
              return (
                <div className="col-lg-3 col-md-4 col-6" key={v._id}>
                  {<Item product={v} goToDetail={() => this.props.history.push(`/product/${v._id}`)} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductList);
