import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className="container">
      <div className="h-14 flex flex-row items-center justify-between">
        <p>Hola soy el Header</p>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
