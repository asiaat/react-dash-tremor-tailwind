import React from "react";
import AreaChartComponent from "./AreaChartComponent";
import TableSmartContract from "./TableSmartContract";
import Sidebar from "./Sidebar";
import CardItem from "./CardItem";
import StatsCountItems from "./StatsCountItems";
import StatsWholeTxs from "./StatsWholeTxs";
import StatsTotalVolume from "./StatsTotalVolume";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      
      <div className="flex flex-col lg:flex-row gap-2 w-full">
      <StatsTotalVolume />
        <StatsCountItems />
        <StatsWholeTxs />
        
      </div>
      <div className="flex-auto w-full">
      <TableSmartContract />
      <AreaChartComponent />

      </div>
    </div>
  );
};

export default LeftColumn;
