import React from "react";

import img1 from "app/assets/img_vss1.png";
import img2 from "app/assets/img_vss2.png";

export const DetailCard = () => {
  return (
    <div className="container">
      <div className="row align-items-center ">
        <div className="col-sm-6">
          <img src={img1} alt="image" className="w-100 h-100" />
        </div>
        <div className="col-sm-6">
          <div className="flex_content">
            <h2>Manage your customer subscriptions effortlessly</h2>
            <p>Manage your customer subscriptions effortlessly</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center flex-wrap-reverse pt-4">
        <div className="col-sm-6">
          <div className="flex_content">
            <h2>Manage your customer subscriptions effortlessly</h2>
            <p>Manage your customer subscriptions effortlessly</p>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={img2} alt="image" className="w-100 h-100" />
        </div>
      </div>
    </div>
  );
};
