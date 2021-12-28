import React from "react";

import Property from "./components/Property/index";
import s from "./index.module.scss";

const PropertyList = ({
  properties,
  selectedProperty,
  handlePropertyClick,
}) => {
  return (
    <ul className={s["property-list"]}>
      {properties.map((property) => {
        const isSelected = property.id === selectedProperty.id;
        return (
          <Property
            key={property.id}
            isSelected={isSelected}
            property={property}
            handlePropertyClick={handlePropertyClick}
          />
        );
      })}
    </ul>
  );
};

export default PropertyList;
