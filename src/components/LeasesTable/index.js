import React from "react";

import TableRow from "./components/TableRow/index";
import s from "./index.module.scss";

const LeasesTable = ({ selectedProperty, leases }) => {
  const name = selectedProperty.name;
  const noLeases = leases.length === 0;

  return (
    <div className={s["table-container"]}>
      <h2 className={s["property-name"]}>{name} Leases</h2>
      <table>
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Lease Status</th>
            <th>Primary Contact</th>
          </tr>
        </thead>
        <tbody>
          {leases.map((lease) => (
            <TableRow key={lease.id} lease={lease} />
          ))}
        </tbody>
      </table>
      {noLeases && <p>No lease data is available for this property.</p>}
    </div>
  );
};

export default LeasesTable;
