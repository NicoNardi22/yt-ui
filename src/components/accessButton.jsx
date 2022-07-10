import PropTypes from "prop-types";
import React from "react";
import User from "./icons/user";

const AccessButton = ({ mode }) => {
  return (
    <>
      <button className="flex border border-sky-600 dark:border-sky-400 py-1.5 px-3 text-sky-600 dark:text-sky-400">
        <User color={mode === "dark" ? "#38BDF8" : "#0284C7"} />
        <span className="uppercase ml-1.5 font-semibold">Acceder</span>
      </button>
    </>
  );
};

AccessButton.propTypes = {
  mode: PropTypes.string,
};

export default AccessButton;
