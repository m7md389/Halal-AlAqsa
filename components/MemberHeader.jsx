import React from "react";
import memberCardStyles from "../styles/MemberHeader.module.scss";

const MemberHeader = (props) => {
  const { prefix, name, suffix, position, photoUrl } = props;
  return (
    <div className={memberCardStyles.container}>
      {photoUrl && (
        <img
          className={memberCardStyles.photo}
          src={photoUrl}
          alt={`Photo of  ${name}`}
        />
      )}
      <div>
        <h3 className={memberCardStyles.name}>
          {prefix && <span className={memberCardStyles.prefix}>{prefix} </span>}
          {name}
          {suffix && (
            <span className={memberCardStyles.suffix}> - {suffix}</span>
          )}
        </h3>
        {position && <p className={memberCardStyles.position}>{position}</p>}
      </div>
    </div>
  );
};

export default MemberHeader;
