import React from "react";
import cardStyles from "../styles/Card.module.scss";

export default function Card(props) {
  const { heading, description, children } = props;
  return (
    <div className={cardStyles.card}>
      <h2 className={cardStyles.heading}>{heading}</h2>
      {description && <p className={cardStyles.description}>{description}</p>}
      {children}
    </div>
  );
}

// export default Card;
