import React, { useState } from "react";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

function Header() {
  const [show, setShow] = useState(false);

  const handleDrawer = () => {
    const displayDrawer = !show;
    setShow(displayDrawer);
  };
  const closeHandle = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <header className="Header">
        <NavLinks />
        <SideDrawer onClick={handleDrawer} show={show} close={closeHandle}>
          <div className="background">
            <span className="background__icon"></span>
          </div>
        </SideDrawer>
      </header>
    </React.Fragment>
  );
}

export default Header;
