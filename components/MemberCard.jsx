import React from "react";
import MemberHeader from "./MemberHeader";
import memberCardStyles from "../styles/MemberCard.module.scss";
import Card from "./Card";

const MemberCard = (props) => {
  const { prefix, name, suffix, position, photoUrl, cv } = props;

  return (
    <section role="member" className={memberCardStyles.container}>
      <header className={memberCardStyles.member}>
        <MemberHeader
          prefix={prefix}
          name={name}
          suffix={suffix}
          position={position}
          photoUrl={photoUrl}
        />
      </header>
      <div className={memberCardStyles.cv}>
        {Object.entries(cv).map(([key, value], index) => (
          <Card key={index} heading={key} description={value} innerCard />
        ))}
      </div>
    </section>
  );
};

export default MemberCard;
