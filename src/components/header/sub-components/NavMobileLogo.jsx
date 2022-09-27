import React from "react";

const NavMobileLogo = ({ reference, ...rest }) => {
  return (
    <div ref={reference} {...rest}>
      <span className="menu--top menu--top-white"></span>
      <span className="menu--bottom menu--bottom-white"></span>
    </div>
  );
};

export default NavMobileLogo;
