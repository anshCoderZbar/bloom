import React from "react";

import subs1 from "app/assets/sub-img1.png";

export const Subscription = () => {
  return (
    <div className=" container ">
      <div className="subs_cc">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-10 col-lg-8 ">
            <h2>Manage your customer subscriptions</h2>
          </div>
        </div>
        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link "
              id="pills-mission-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mission"
              type="button"
              role="tab"
              aria-controls="pills-mission"
              aria-selected="true"
            >
              Our Mission
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-solution-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-solution"
              type="button"
              role="tab"
              aria-controls="pills-solution"
              aria-selected="false"
            >
              Our Solution
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-lending-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-lending"
              type="button"
              role="tab"
              aria-controls="pills-lending"
              aria-selected="false"
            >
              Lending
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-borrowing-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-borrowing"
              type="button"
              role="tab"
              aria-controls="pills-borrowing"
              aria-selected="false"
            >
              Borrowing
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-mission"
            role="tabpanel"
            aria-labelledby="pills-mission-tab"
          >
            <div className="row align-items-center mission_tab">
              <div className="col-md-6">
                <div className="subs_head">
                  <h3>
                    Building a Decentralized Financial Future with Cardano
                  </h3>
                  <p>Manage your customer subscriptions effortlessly</p>
                </div>
              </div>
              <div className="col-md-6">
                <img src={subs1} alt="img" className="subsc_img_1" />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-solution"
            role="tabpanel"
            aria-labelledby="pills-solution-tab"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            nesciunt obcaecati eius iure ducimus minus assumenda iusto in
            sapiente rerum accusantium ullam distinctio aliquam, aut voluptate
            officiis illo laboriosam veniam? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur quas porro aspernatur nemo
            totam dolores corporis iure, laborum explicabo quaerat corrupti quos
            perferendis dicta. Id omnis fugiat voluptates dolorem quisquam culpa
            totam exercitationem laborum harum quasi qui quibusdam laboriosam
            atque sunt praesentium, accusantium nesciunt veniam nostrum vero ut
            quidem doloremque ipsa repellat? Ullam, suscipit explicabo?
          </div>
          <div
            className="tab-pane fade"
            id="pills-lending"
            role="tabpanel"
            aria-labelledby="pills-lending-tab"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            nesciunt obcaecati eius iure ducimus minus assumenda iusto in
            sapiente rerum accusantium ullam distinctio aliquam, aut voluptate
            officiis illo laboriosam veniam? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur quas porro aspernatur nemo
            totam dolores corporis iure, laborum explicabo quaerat corrupti quos
            perferendis dicta. Id omnis fugiat voluptates dolorem quisquam culpa
            totam exercitationem laborum harum quasi qui quibusdam laboriosam
            atque sunt praesentium, accusantium nesciunt veniam nostrum vero ut
            quidem doloremque ipsa repellat? Ullam, suscipit explicabo?
          </div>
          <div
            className="tab-pane fade"
            id="pills-borrowing"
            role="tabpanel"
            aria-labelledby="pills-borrowing-tab"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            nesciunt obcaecati eius iure ducimus minus assumenda iusto in
            sapiente rerum accusantium ullam distinctio aliquam, aut voluptate
            officiis illo laboriosam veniam? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur quas porro aspernatur nemo
            totam dolores corporis iure, laborum explicabo quaerat corrupti quos
            perferendis dicta. Id omnis fugiat voluptates dolorem quisquam culpa
            totam exercitationem laborum harum quasi qui quibusdam laboriosam
            atque sunt praesentium, accusantium nesciunt veniam nostrum vero ut
            quidem doloremque ipsa repellat? Ullam, suscipit explicabo?
          </div>
        </div>
      </div>
    </div>
  );
};
