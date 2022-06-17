import React, { useState } from "react";
import MemberHeader from "./MemberHeader";
import memberCardStyles from "../styles/MemberCard.module.scss";

const MemberCard = (props) => {
  const { prefix, name, photoUrl, cv } = props;

  return (
    <section role="member" className={memberCardStyles.container}>
      <header className={memberCardStyles.member}>
        <MemberHeader prefix={prefix} name={name} photoUrl={photoUrl} />
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
