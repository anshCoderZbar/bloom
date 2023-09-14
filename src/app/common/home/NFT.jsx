import React, { useRef } from "react";

import { MdOutlineArrowDropDown } from "react-icons/md";

export const NFT = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, nft } = props;
  const { header, id, text } = nft;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title">{header}</h5>
          <div className="rc-accordion-icon fs-5 text-white">
            <MdOutlineArrowDropDown />
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          {/* <p className="mb-0">{text}</p> */}
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <></>;
};
