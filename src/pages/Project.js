import React from "react";
import "../App.scss";

function Project(props) {
  return (
    <React.Fragment>
      <div className="Project">
        <img className="Project__image" src={props.image} alt={props.name} />
        <div className="gap">
          <p className="Project__name">
            <strong>Name:</strong> {props.name}
          </p>
          <p className="gap__box">
            <a
              href={props.url}
              className="gap__box-link"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </p>
        </div>
        <p className="Project__description">
          <strong>Description: </strong> {props.description}
        </p>
        <p className="Project__description">
          <strong>How to use: </strong> {props.how}
        </p>
      </div>
    </React.Fragment>
  );
}

export default Project;
