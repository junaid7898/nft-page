import React from "react";

const Card = ({ source, type, ...rest }) => {
  return (
    <div {...rest}>
      <img src={source} alt="card intro" className="card-img" />
      {type !== "simple" && <div className="card-container"></div>}
    </div>
  );
};

export default Card;
