import React from "react";
import UserDetails from "./UserDetails";
import StatusBadge from "./StatusBadge";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <h2 className="card-title">User Information Dashboard</h2>
      <UserDetails name={user.name} role={user.role} />
      <StatusBadge status={user.status} />
      <div className="btn-group">
        <button className="btn primary">Change Role</button>
        <button className="btn secondary">Toggle Status</button>
      </div>
    </div>
  );
};

export default UserCard;