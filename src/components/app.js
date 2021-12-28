import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "components/Header/index";
import PropertyList from "components/PropertyList/index";
import LeasesTable from "components/LeasesTable/index";
import s from "./app.module.scss";

function App() {
  const [properties, setProperties] = useState([]);
  const [leases, setLeases] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState({});

  useEffect(() => {
    const getProperties = async () => {
      const { data } = await axios.post(
        "https://talent.ender.com/fe-challenge/properties",
        {
          token: process.env.REACT_APP_API_TOKEN,
        }
      );
      setProperties(data);
    };
    getProperties();
  }, []);

  const handlePropertyClick = async (property) => {
    const propertyId = property.id;
    const { data } = await axios.post(
      `https://talent.ender.com/fe-challenge/properties/${propertyId}/leases`,
      {
        token: process.env.REACT_APP_API_TOKEN,
      }
    );

    setLeases(data);
    setSelectedProperty(property);
  };

  return (
    <div className={s.app}>
      <div className={s.stars}></div>
      <div className={s.twinkling}></div>
      <Header />
      <PropertyList
        properties={properties}
        selectedProperty={selectedProperty}
        handlePropertyClick={handlePropertyClick}
      />
      <LeasesTable selectedProperty={selectedProperty} leases={leases} />
    </div>
  );
}

export default App;
