import React from "react";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <React.Fragment>
      <header className="Header">
        <NavLinks />
      </header>
    </React.Fragment>
  );
}

export default Header;
