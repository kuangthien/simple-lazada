import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import formatNumber from "./../utils/format";

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

 
    const product =   this.state.articleList ;
    const { regular, old, saleRatio } = product.prices;

    return (
      <div className="my-4 article-detail">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4  ">
              <div className="row">
                <div className="col-12  col-md-8 col-lg-12">
                  <div className="d-flex align-items-center justify-content-start   h-100">
                    <div className="text-lg-center">
                      <h1 className="h2 my-0 my-md-4">{product.title}</h1>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-12">
                  <div className="d-flex align-items-center justify-content-start   h-100">
                    <img
                      src={product.imageUrl}
                      alt=""
                      height="auto"
                      minheight="100%"
                      width="100%"
                      className="bg-dark"
                    />
                  </div>
                  <div className="fz-14">
                    <div className="text-danger font-weight-bold">{formatNumber(regular)} đ</div>
                    <div className="text-muted">
                      <del>{formatNumber(old)} đ</del>
                    </div>
                  </div>
                  <div className="txt">{product.desc}</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="content my-4">{product.content}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
