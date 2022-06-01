import React from "react";
import cardStyles from "../styles/Card.module.scss";

const Card = (props) => {
  const { title, description, children } = props;
  return (
    <div className={cardStyles.card}>
      <h2 className={cardStyles.title}>{title}</h2>
      {description && <p className={cardStyles.description}>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
