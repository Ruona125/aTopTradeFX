import React from "react";
import BitCoinDashBoard from "../components/Dashboard/BitCoinDashBoard";
import Users from "../Users";

const AdminDashBoard = () => {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Admin</h2>
      <BitCoinDashBoard />
      <Users />
    </div>
  );
};

export default AdminDashBoard;
