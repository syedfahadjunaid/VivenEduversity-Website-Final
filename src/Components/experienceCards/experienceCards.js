import React, { useEffect, useState } from "react";

import "./experienceCards.css";

function ExperienceCards({
  cardIndex,
  icon,
  heading,
  cardDisplayIndex,
  setCardDisplayIndex,
}) {
  const [lineAnimation, setLineAnimation] = useState(false);

  const handleMouseOver = () => {
    setCardDisplayIndex(cardIndex);
  };

  useEffect(() => {
    if (cardDisplayIndex === cardIndex) {
      setLineAnimation(true);
    } else {
      setLineAnimation(false);
    }
  }, [cardDisplayIndex]);

  return (
    <div
      onMouseOver={handleMouseOver}
      className="app-container-flex-center experience-cards"
    >
      <div
        className={`experience-cards-container ${
          lineAnimation ? "exp-card-highlighted" : " "
        }`}
      >
        {icon}
        <h4>{heading}</h4>
      </div>
      {/* <div className="app-container-flex-center experience-cards-extra-container">
        {extraDetail.map((data, index) => (
          <div
            key={index}
            className="app-container-flex-center experience-details-container"
          >
            {data.icon}
            <h4>{data.heading}</h4>
          </div>
        ))}
      </div> */}
      <div
        className={`experience-cards-line ${lineAnimation ? "line-on" : ""}`}
      />
    </div>
  );
}

export default ExperienceCards;
