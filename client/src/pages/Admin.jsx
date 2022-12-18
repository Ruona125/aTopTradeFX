import React from "react";
import AdminHeader from "../components/Authentication/AdminHeader";
import BitCoinDashBoard from "../components/Dashboard/BitCoinDashBoard";
import Users from "../Users";

const AdminDashBoard = () => {
  return (
    <div className="container">
      <AdminHeader />
      <h2 style={{ textAlign: "center" }}>Admin</h2>
      <BitCoinDashBoard />
      <Users />
    </div>
  );
};

export default AdminDashBoard;
