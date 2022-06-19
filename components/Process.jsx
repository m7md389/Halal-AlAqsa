import React from "react";
import processStyles from "../styles/Process.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Process = (props) => {
  const { faIcon, heading, description, attachedFiles, email } = props;

  return (
    <div className={processStyles.process}>
      <span className={processStyles.icon}>
        <FontAwesomeIcon icon={faIcon} />
      </span>
      <div className={processStyles.content}>
        <h3 className={processStyles.heading}>{heading}</h3>
        <p className={processStyles.description}>
          {description}{" "}
          {email && <span className={processStyles.email}>{email}</span>}
          {attachedFiles && (
            <a
              className={processStyles.attachedFiles}
              href={attachedFiles.link}
              download
            >
              {attachedFiles.text}
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default Process;
