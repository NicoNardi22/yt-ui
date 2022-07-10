import PropTypes from "prop-types";
import React from "react";

const User = ({ color }) => {
  return (
    <div className="h-6 w-6">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g data-name="Layer 2" id="Layer_2" fill={color}>
          <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
          <path d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z" />
          <path d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z" />
        </g>
        <g id="frame" fill="none">
          <rect height="32" width="32" />
        </g>
      </svg>
    </div>
  );
};

User.propTypes = {
  color: PropTypes.string,
};

export default User;
