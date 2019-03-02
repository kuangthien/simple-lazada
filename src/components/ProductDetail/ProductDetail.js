import React, { Component } from "react";
import formatNumber from "./../../utils/format";
import "./ProductDetail.scss";
const ProductDetail = props => {
  const { product } = props;
  const { regular, old, saleRatio } = product.prices;

  return (
    <div className="my-4 article-detail">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-start   ">
              <div className="text-lg-center">
                <h1 className="h2 my-2 my-md-4">{product.title}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12   ">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-center justify-content-start    ">
                  <img src={product.imageUrl} alt="" height="auto" minheight="100%" width="100%" className="bg-dark" />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fz-14 mt-3">
                  <div className="text-danger font-weight-bold fz-25">{formatNumber(regular)} đ</div>
                  <div className="text-muted">
                    <del>{formatNumber(old)} đ</del>
                  </div>
                </div>
                <div className="d-none d-md-block">
                  <hr/>
                  <div className="  p-2 text-right">
                    <button className="btn   btn-add-to-cart">Mua</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="txt mt-0 mt-md-4">{product.desc}</div>
            <div className="d-block d-md-none">
              <div className="buffer-action " />
              <div className="action-wrapper p-2 text-right">
                <button className="btn   btn-add-to-cart">Mua</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
