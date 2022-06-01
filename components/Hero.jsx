import React from "react";
import heroStyles from "../styles/Hero.module.scss";

const Hero = (props) => {
  const { title, paragraph, img } = props;
  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.grid}>
        <div className={heroStyles.content}>
          <h1 className={heroStyles.heading}>{title}</h1>
          <p className={heroStyles.tagline}>{paragraph}</p>
        </div>
        <div className={heroStyles.image}>
          <img src={img.url} alt={img.desc} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
