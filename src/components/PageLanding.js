import React, { Component } from "react";
export default class PageLanding extends Component {
  render() {
    return (
      <div className="home-landing">
        <div className="position-relative overflow-hidden p-3 p-md-5 mb-xl-3 text-center bg-dark">
          <div
            className="position-absolute img "
            style={{
              backgroundImage: `url(https://picsum.photos/2000/700/)`
            }}
          />
          <div className="position-relative text-light">
            <div className="col-md-5 p-lg-4 mx-auto my-1 my-md-2">
              <h1 className="fz-18 fz-md-32 font-weight-normal">Đồ chơi mô hình</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
