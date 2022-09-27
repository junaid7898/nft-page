import React from "react";

const Card = ({ source, type }) => {
  return (
    <div className="card">
      <img src={source} alt="card intro" className="card-img" />
      {type !== "simple" && <div className="card-container"></div>}
    </div>
  );
};

export default Card;
