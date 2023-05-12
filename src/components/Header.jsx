import React from "react";
import headerLogo from "../images/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="логотип места" />
    </header>
  );
}

export default Header;
