import React from "react";
import AdminHeader from "../components/Headers/AdminHeader";
import BitCoinDashBoard from "../components/Dashboard/BitCoinDashBoard";
import Users from "../components/Users";

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
