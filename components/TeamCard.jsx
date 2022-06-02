import React from "react";
import Card from "./Card";
import MemberCard from "./MemberCard";
import teamCardStyles from "../styles/TeamCard.module.scss";

const TeamCard = (props) => {
  const { teamMembers } = props;

  return (
    <section role="team" className={teamCardStyles.team}>
      <Card heading="Our Team Members">
        <div className={teamCardStyles.members}>
          {teamMembers.map((member) => (
            <MemberCard key= {...member} />
          ))}
        </div>
      </Card>
    </section>
  );
};

export default TeamCard;
