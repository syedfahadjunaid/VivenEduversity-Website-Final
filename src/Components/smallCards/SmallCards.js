import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

import "./SmallCards.css";

import homeSmallCardsBg from "../../Assets/Home/homeSmallCardsBg.png";

function SmallCards({ icon, heading, number }) {
  console.log(Number(number));
  return (
    <div
      id="cards-section"
      className="app-container-flex-center small-cards"
      style={{
        backgroundImage: `url(${homeSmallCardsBg})`,
      }}
    >
      {/* <div className="small-cards-icon-container"></div> */}
      {icon}
      <h3 className="animated-number">
        <CountUp
          start={0}
          end={Number(number)}
          duration={2}
          enableScrollSpy={true}
        />
        +
      </h3>
      <span>{heading}</span>
    </div>
  );
}

export default SmallCards;
