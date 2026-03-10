import React from "react";

const StatusBadge = ({ status }) => {
  return (
    <span className={status === "Active" ? "badge active" : "badge inactive"}>
      {status}
    </span>
  );
};

export default StatusBadge;