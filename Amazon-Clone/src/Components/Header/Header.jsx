import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Amazon Logo */}
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
      />

      {/* Search Bar */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <img
          className="header__searchIcon"
          src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
          alt="Search Icon"
        />
      </div>

      {/* Navigation Options */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <img
            className="header__basketIcon"
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="Cart Icon"
          />
          <span className="header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
