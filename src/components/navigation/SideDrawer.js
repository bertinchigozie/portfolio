import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "../../App.scss";

function Drawer(props) {
  const content = props.show ? (
    <div className="Nav" onClick={props.close}>
      <div
        className="Nav__menu"
        style={
          props.show
            ? {
                transition: "transform 2s ease",
              }
            : ""
        }
      ></div>
      <nav className="Nav__lists">
        <ul className="Nav__list">
          <li className="Nav__item">
            <Link to="/">
              <p className="Nav__link">Home</p>
            </Link>
          </li>
          <li className="Nav__item">
            <Link to="/projects">
              <p className="Nav__link">Projects</p>
            </Link>
          </li>
          <li className="Nav__item">
            <a
              href="https://github.com/bertinchigozie"
              target="_blank"
              rel="noreferrer"
            >
              <p className="Nav__link">GitHub</p>
            </a>
          </li>
          <li className="Nav__item">
            <a
              href="https://linkedin.com/in/chigozie-okeke-1a688520a"
              target="_blank"
              rel="noreferrer"
            >
              <p className="Nav__link">LinkedIn</p>
            </a>
          </li>
          <li className="Nav__item">
            <Link to="/contactme">
              <p className="Nav__link">Contact Me</p>
            </Link>
          </li>
          <li className="Nav__item">
            <Link to="/">
              <p className="Nav__link">Sign Up</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  ) : (
    false
  );

  return createPortal(content, document.getElementById("side-drawer"));
}

function SideDrawer(props) {
  return (
    <React.Fragment>
      <div onClick={props.onClick}>{props.children}</div>
      <Drawer {...props} />
    </React.Fragment>
  );
}

export default SideDrawer;
