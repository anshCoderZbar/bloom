import React, { useState } from "react";

import { Banner } from "app/common/home/Banner";

import "styles/Main.css";
import { Subscription } from "app/common/home/Subscription";
import { DetailCard } from "app/common/home/DetailCard";
import { nft } from "app/mock/NFT";
import { NFT } from "app/common/home/NFT";

export const Home = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <div className="home_page">
      <div className="banner">
        <div className="position-relative">
          <Banner />
        </div>
      </div>
      <div className="page_background">
        <div className="subscription" id="learn">
          <Subscription />
        </div>
        <div className=" flexColumn" id="about">
          <DetailCard />
        </div>
        <div className="container" id="community">
          <div className="page_content">
            <h3>Manage your customer subscriptions effortlessly</h3>
            <p>
              Lotem ipsum dolor sit amet- nnsectetur advpisong elit. sed do
              e•usrnod tempor incid•dunt ut labore et dolore magna ai•qua.
            </p>
          </div>
        </div>
        <div className="container mt-5 mb-5" id="help">
          <div className="row justify-content-center">
            <div className="col-md-10 mt-2">
              <div className="card">
                <div className="card-body">
                  {nft.map((nft, index) => {
                    return (
                      <NFT
                        key={index}
                        active={active}
                        handleToggle={handleToggle}
                        nft={nft}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
