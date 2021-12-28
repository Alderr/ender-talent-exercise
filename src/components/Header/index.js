import React from "react";

import s from "./index.module.scss";
import logo from "assets/images/ender-logo-white.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <img alt="ender-logo" className={s["ender-logo"]} src={logo} />
    </div>
  );
};

export default Header;
