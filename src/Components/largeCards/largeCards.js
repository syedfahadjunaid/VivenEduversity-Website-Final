import React from "react";

import "./largeCards.css";

function LargeCards({ bgImg, heading, listData }) {
  const renderedList = listData.map((data, index) => (
    <li key={index}>{data}</li>
  ));
  return (
    <div
      className="app-container-flex-center large-cards"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="app-container-flex-center large-cards-text-container">
        <h3>{heading}</h3>
      </div>
    </div>
  );
}

export default LargeCards;
