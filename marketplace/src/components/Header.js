import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} className="searchIcon" />
        </div>

        <input
          className="searchInput"
          placeholder="Collection, Item or User..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Items</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} />
        </div>
      </div>

      <button className="loginButton" onClick={()=>window.open("https://testnets.opensea.io/collection/colours-ag5qsddnvz")}>
      OPENSEA
      </button>
    </div>
  );
};

export default Header;