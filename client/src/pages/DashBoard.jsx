import React from "react";

import BitCoinDashBoard from "../components/Dashboard/BitCoinDashBoard";
import TradeResult from "../components/TradeResult.component";
import UserHeader from "../components/Headers/UserHeader";

const DashBoard = () => {
  return (
    <div className="container">
      <UserHeader />
      <BitCoinDashBoard />
      <TradeResult />
    </div>
  );
};

export default DashBoard;
