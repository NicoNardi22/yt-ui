import PropTypes from "prop-types";
import React from "react";

export const LogoLight = () => {
  return (
    <div className="flex items-cente justify-center p-4">
      <img
        src={require("../../assets/images/YouTube_dark_logo_2017x256.png")}
        alt="youtube dark logo"
        className="h-5 w-auto"
      />
    </div>
  );
};

export const LogoDark = () => {
  return (
    <div className="flex items-cente justify-center p-4">
      <img
        src={require("../../assets/images/YouTube_light_logo_2017x256.png")}
        alt="youtube dark logo"
        className="h-5 w-auto"
      />
    </div>
  );
};

LogoDark.propTypes = {};
LogoLight.propTypes = {};
