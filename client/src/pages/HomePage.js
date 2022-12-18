import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import HomeHeader from "../components/Headers/HomeHeader";

const HomePage = () => {
  return (
    <div>
      <HomeHeader />
      <Banner />
      <CoinsTable />
    </div>
  );
};

export default HomePage;
