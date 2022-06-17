import React from "react";
import memberCardStyles from "../styles/MemberHeader.module.scss";

const MemberHeader = (props) => {
  const { prefix, name, photoUrl } = props;
  return (
    <div className={memberCardStyles.container}>
      {photoUrl && (
        <img
          className={memberCardStyles.photo}
          src={photoUrl}
          alt={`Photo of  ${name}`}
        />
      )}
      <h3 className={memberCardStyles.name}>
        {prefix && <span className={memberCardStyles.prefix}>{prefix}</span>}{" "}
        {name}
      </h3>
    </div>
  );
};

export default MemberHeader;
