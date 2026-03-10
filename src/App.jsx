import React from "react";
import UserCard from "./components/usercard";
import "./App.css";

const App = () => {
  const userData = {
    name: "Ch.Renu sree charitha",
    role: "Frontend Developer",
    status: "Active",
  };

  return (
    <div className="app-container">
      <UserCard user={userData} />
    </div>
  );
};

export default App;