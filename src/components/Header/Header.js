import React from "react";
import "./styles.scss";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img
          src="https://i.imgur.com/KDIDiSE.png"
          alt="Logo"
          className="header-logo"
        />
        <div className="header__content">
          <span>My Profile</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
