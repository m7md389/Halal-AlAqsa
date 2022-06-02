import React from "react";
import processStyles from "../styles/Process.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Process = (props) => {
  const { faIcon, heading, description } = props;

  return (
    <div className={processStyles.process}>
      <span className={processStyles.icon}>
        <FontAwesomeIcon icon={faIcon} />
      </span>
      <div className={processStyles.content}>
        <h3 className={processStyles.heading}>{heading}</h3>
        <p className={processStyles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Process;
