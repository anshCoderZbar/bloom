import React, { useEffect, useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import { header } from "../../mock/header";
import { useLocation } from "react-router-dom";

import logo from "app/assets/logo.png";
import twitter from "app/assets/Twitter.png";
import telegram from "app/assets/Telegram.png";
import medium from "app/assets/Medium.png";

import "styles/Layout.css";

export const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      document.body.addEventListener("mousedown", () => setActive(false));
    } else return;

    return () => {
      document.body.removeEventListener("mousedown", () => setActive(false));
    };
  }, [active]);
  return (
    <nav className="fadein fadein--one">
      <div className="container-fluid ">
        <div className="navbar_fad">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="menu " style={{ right: active ? "0" : "-100%" }}>
            <div
              className=" navClose cursor-pointer "
              onClick={() => setActive(false)}
            >
              <AiOutlineClose />
            </div>
            {header?.map((links) => {
              return (
                <li key={links?.id}>
                  <a
                    className={`fw-semibold ${
                      links?.slug === location?.hash ||
                      (links?.slug === "#" && !location?.hash)
                        ? "nav-active "
                        : null
                    }`}
                    href={links?.slug}
                  >
                    {links?.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="social_icons">
            <ul>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" width={30} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={telegram} alt="telegram" width={30} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={medium} alt="medium" width={30} />
                </a>
              </li>
            </ul>
          </div>
          <div
            onClick={() => setActive(true)}
            className="navOpen cursor-pointer"
          >
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};
