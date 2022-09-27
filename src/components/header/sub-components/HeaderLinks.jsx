import React from "react";

const HeaderLinks = ({ reference }) => {
  return (
    <div className="header-links__container" ref={reference}>
      <ol className="header-links fs-sm">
        <li>Og crocs</li>
        <li>launchpad</li>
        <li>members</li>
        <li>secondary market place</li>
        <li>Road Map</li>
      </ol>
    </div>
  );
};

export default HeaderLinks;
