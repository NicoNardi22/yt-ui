import { LogoDark, LogoLight } from "./icons/logo";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import React from "react";

const Header = () => {
  const [mode, setMode] = useState("light");

  const onSelectMode = (mode) => {
    setMode(mode);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (matchMedia) {
      // Add listener to update styles
      matchMedia.addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );

      // Setup dark/light mode for the first time
      onSelectMode(matchMedia.matches ? "dark" : "light");

      // Remove listener
      return () => {
        matchMedia.removeEventListener("change", () => {});
      };
    } else {
      return;
    }
  }, []);

  let logo;
  if (mode === "dark") {
    logo = <LogoDark />;
  } else {
    logo = <LogoLight />;
  }

  return (
    <div className="container">
      <div className="h-14 flex flex-row items-center justify-between">
        {logo}
        <p>Hola soy el Header</p>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
