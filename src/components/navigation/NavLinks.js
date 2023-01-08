import React from "react";
import { FaGithub, FaHome, FaProjectDiagram, FaSign } from "react-icons/fa";
import { BsLinkedin, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../App.scss";

function NavLinks() {
  return (
    <main className="Navbar">
      <Link to="/">
        <div className="Link Active">
          <FaHome className="NavLink" />
          <p className="text">Home</p>
        </div>
      </Link>
      <Link to="/projects">
        <div className="Link">
          <FaProjectDiagram className="NavLink" />
          <p className="text">Projects</p>
        </div>
      </Link>
      <a
        href="https://github.com/bertinchigozie"
        target="_blank"
        rel="noreferrer"
      >
        <div className="Link">
          <FaGithub className="NavLink" />
          <p className="text">Github</p>
        </div>
      </a>
      <a
        href="https://linkedin.com/in/chigozie-okeke-1a688520a"
        target="_blank"
        rel="noreferrer"
      >
        <div className="Link">
          <BsLinkedin className="NavLink" />
          <p className="text">LinkedIn</p>
        </div>
      </a>
      <Link to="/contactme">
        <div className="Link">
          <BsFillPersonFill className="NavLink" />
          <p className="text">Contact Me</p>
        </div>
      </Link>
      <Link to="/">
        <div className="Link">
          <FaSign className="NavLink" />
          <p className="text">Sign Up</p>
        </div>
      </Link>
    </main>
  );
}

export default NavLinks;
