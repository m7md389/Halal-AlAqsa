import React from "react";
import heroStyles from "../styles/Hero.module.scss";

const Hero = (props) => {
  const { title, tagline, img } = props;
  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.content}>
        <h1 className={heroStyles.heading}>{title}</h1>
        <p className={heroStyles.tagline}>{tagline}</p>
      </div>
      <span>
        <img className={heroStyles.image} src={img.url} alt={img.desc} />
      </span>
    </section>
  );
};

export default Hero;
