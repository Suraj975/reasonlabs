import React from "react";
import { style } from "../style";

const UserRecords = ({ useDetails, setUserDetails }) => {
  const handleDelete = (index) => {
    const useDetailsClone = [...useDetails];
    useDetailsClone.splice(index, 1);
    setUserDetails(useDetailsClone);
  };
  return (
    <>
      {useDetails?.map((user, index) => {
        const { userFirstname, userLastname, userPhone } = user;
        return (
          <tr key={index} data-testid="content">
            <td style={style.tableCell}>{index}</td>
            <td style={style.tableCell}>{userFirstname}</td>
            <td style={style.tableCell}>{userLastname}</td>
            <td style={style.tableCell}>{userPhone}</td>
            <td
              onClick={() => handleDelete(index)}
              style={{ ...style.tableCell, cursor: "pointer" }}
            >
              Delete
            </td>
          </tr>
        );
      })}
    </>
  );
};

function InformationTable({ useDetails, setUserDetails }) {
  if (!useDetails.length) return null;
  return (
    <div className="informationTableContainer">
      <table style={style.table}>
        <thead>
          <tr data-testid="table-header">
            <th style={style.tableCell}>No</th>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
            <th style={style.tableCell}>Action</th>
          </tr>
        </thead>
        <tbody>
          <UserRecords
            useDetails={useDetails}
            setUserDetails={setUserDetails}
          />
        </tbody>
      </table>
    </div>
  );
}

export default InformationTable;
