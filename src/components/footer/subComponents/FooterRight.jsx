import React from "react";

const FooterRight = ({ ...rest }) => {
  return (
    <div {...rest}>
      <div className="footer--twitter">
        <p>T</p>
      </div>
      <div className="footer--instagram">
        <p>I</p>
      </div>
    </div>
  );
};

export default FooterRight;
