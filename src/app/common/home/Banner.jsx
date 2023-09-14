import React from "react";

import bannerImg from "app/assets/banner.png";

export const Banner = () => {
  return (
    <div className="container-fluid" id="#">
      <div className="flex-wrap flex-sm-nowrap banner_fle">
        <div className="banner_content">
          <h1>
            Native Lending <br /> & Borrowing on <br /> the Blockchain
          </h1>
          <div className="row">
            <div className="col-md-10">
              <p>Manage your customer subscriptions effortlessly</p>
            </div>
          </div>

          <div className="bann_btn">
            <a href="#">Click Me</a>
          </div>
        </div>
        <div className="banner_img">
          <img src={bannerImg} alt="bannerImg" />
        </div>
      </div>
    </div>
  );
};
