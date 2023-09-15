import React from "react";

import twitter from "app/assets/Twitter.png";
import telegram from "app/assets/Telegram.png";
import medium from "app/assets/Medium.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap footer_sec">
          <p>
            Copyright © {new Date().getFullYear()} All Rights Reserved by Bloom.
          </p>
          <div className="social_icons">
            <ul>
              <li className="footer_social">
                <a href="#">
                  <img src={twitter} alt="twitter" width={35} />
                </a>
              </li>
              <li className="footer_social">
                <a href="#">
                  <img src={telegram} alt="telegram" width={35} />
                </a>
              </li>
              <li className="footer_social">
                <a href="#">
                  <img src={medium} alt="medium" width={35} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
