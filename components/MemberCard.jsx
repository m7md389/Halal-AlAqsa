import React from "react";
import memberCardStyles from "../styles/MemberCard.module.scss";

const MemberCard = (props) => {
  const { prefix, name, photoUrl, cv } = props;
  return (
    <section role="member" className={memberCardStyles.container}>
      <header className={memberCardStyles.member}>
        <img
          className={memberCardStyles.photo}
          src={photoUrl}
          alt={`Photo of  ${name}`}
        />
        <h3 className={memberCardStyles.name}>
          {prefix && <span className={memberCardStyles.prefix}>{prefix}</span>}{" "}
          {name}
        </h3>
      </header>
      <div className={memberCardStyles.cv}>
        {cv.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default MemberCard;
