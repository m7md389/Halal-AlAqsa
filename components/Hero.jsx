import React from "react";
import heroStyles from "../styles/Hero.module.scss";

const Hero = (props) => {
  const { title, paragraph, img } = props;
  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.grid}>
        <div className={heroStyles.text}>
          <h1 className={heroStyles.title}>{title}</h1>
          <p className={heroStyles.paragraph}>{paragraph}</p>
        </div>
        <div className={heroStyles.img}>
          <img src={img.url} alt={img.desc} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
