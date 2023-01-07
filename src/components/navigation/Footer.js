import React from "react";

function Footer() {
  const date = new Date();
  return <div className="Footer">&copy;{date.getFullYear()}</div>;
}

export default Footer;
