import React from "react";
import cardStyles from "../styles/Card.module.scss";

const Card = (props) => {
  const { heading, description, children, innerCard } = props;

  return (
    <div className={cardStyles.card + getInnerCardClass(innerCard)}>
      <h2 className={cardStyles.heading}>{heading}</h2>
      {description && (
        <div className={cardStyles.description}>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      {children}
    </div>
  );
};

const getInnerCardClass = (innerCard) =>
  innerCard ? " " + cardStyles.innerCard : "";

export default Card;
