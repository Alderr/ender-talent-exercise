import React from "react";

import s from "./index.module.scss";
import town from "assets/images/footer-town.svg";

const Footer = () => {
  return (
    <div className={s.footer}>
      <img alt="town-svg" className={s["footer-svg"]} src={town} />
    </div>
  );
};

export default Footer;
