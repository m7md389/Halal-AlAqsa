import React from "react";
import cardStyles from "../styles/Card.module.scss";

const Card = (props) => {
  const { title, description } = props;
  return (
    <section className={cardStyles.card}>
      <h2 className={cardStyles.title}>{title}</h2>
      <p className={cardStyles.description}>{description}</p>
    </section>
  );
};

export default Card;
