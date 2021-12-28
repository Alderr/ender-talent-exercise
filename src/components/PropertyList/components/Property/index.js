import React from "react";

import s from "./index.module.scss";

const Property = ({ property, handlePropertyClick }) => {
  const {
    name = "",
    address1 = "",
    address2 = "",
    baseRent = "",
    sqft = null,
  } = property;

  const baseRentParsed = parseInt(baseRent.replace(/(,|\$)/g, ""));
  const sqFtYearly = (baseRentParsed / sqft).toFixed(2);
  const sqFtMonthly = (sqFtYearly / 12).toFixed(2);

  return (
    <li
      className={s["property-card"]}
      onClick={() => handlePropertyClick(property)}
    >
      <div className={s.upper}>
        <p className={s["property-name"]}>{name}</p>
      </div>
      <div className={s.lower}>
        <div className={s["item-line"]}>
          <p>
            {address1}
            <br />
            {address2}
          </p>

          <p>{baseRent}</p>
        </div>
        <div className={s["item-line"]}>
          <p>{sqft} sqft.</p>
          <p>${sqFtMonthly} sqft/month</p>
          <p>${sqFtYearly} sqft/year</p>
        </div>
      </div>
    </li>
  );
};

export default Property;
