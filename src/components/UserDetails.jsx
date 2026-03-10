import React from "react";

const UserDetails = ({ name, role }) => {
  return (
    <div className="details">
      <h3>{name}</h3>
      <p>Role: {role}</p>
    </div>
  );
};

export default UserDetails;