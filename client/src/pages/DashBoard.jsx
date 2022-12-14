import React from "react";
import BitCoinDashBoard from "../components/Dashboard/BitCoinDashBoard";
import TradeResult from "../components/TradeResult.component";

const DashBoard = () => {
  return (
    <div className="container">
      <BitCoinDashBoard />
      <TradeResult />
    </div>
  );
};

export default DashBoard;
