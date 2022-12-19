import React from "react";
import Report from "../components/Report/ReportComponent";
import BitCoinDashBoard from "../components/Dashboard/BitCoinDashBoard";
import AdminHeader from "../components/Headers/AdminHeader";

const UserReport = () => {
  return (
    <div className="container">
      <AdminHeader />
      <h2 style={{ textAlign: "center" }}>Admin</h2>
      <BitCoinDashBoard />
      <Report />
    </div>
  );
};

export default UserReport;
