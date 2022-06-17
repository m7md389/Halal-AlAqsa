import React, { useState } from "react";
import Card from "./Card";
import MemberHeader from "./MemberHeader";
import MemberCard from "./MemberCard";
import teamCardStyles from "../styles/TeamCard.module.scss";

const TeamCard = (props) => {
  const { teamMembers } = props;
  const [currentMember, setCurrentMember] = useState(null);

  if (currentMember === null)
    return (
      <Card heading="Our Team Members">
        <div className={teamCardStyles.teamList}>
          {Object.entries(teamMembers).map(([index, member]) => (
            <div className={teamCardStyles.memberHeaderContainer}>
              <div
                className={teamCardStyles.memberHeader}
                onClick={() => setCurrentMember(member)}
              >
                <MemberHeader
                  prefix={member.prefix}
                  name={member.name}
                  photoUrl={member.photoUrl}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    );

  return (
    <section role="team">
      <Card heading="Our Team Members">
        <MemberCard {...currentMember} />

        <div
          className={teamCardStyles.memberHeaderContainer}
          onClick={() => setCurrentMember(null)}
        >
          <MemberHeader name={"All Members"}></MemberHeader>
        </div>
      </Card>
    </section>
  );
};

export default TeamCard;
