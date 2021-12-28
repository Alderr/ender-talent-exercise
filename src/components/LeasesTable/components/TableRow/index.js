import React from "react";

const TableRow = ({ lease }) => {
  const {
    companyName = "",
    contacts = [],
    inclusiveEndDate = "N/A",
    startDate = "N/A",
    status = "N/A",
  } = lease;

  let primaryContact = Object.keys(contacts)[0];
  for (const contact in contacts) {
    if (contacts[contact].tags.includes("PRIMARY")) {
      primaryContact = contact;
    }
  }

  return (
    <tr>
      <td>{companyName}</td>
      <td>{startDate}</td>
      <td>{inclusiveEndDate}</td>
      <td>{status}</td>
      <td>{primaryContact}</td>
    </tr>
  );
};

export default TableRow;
