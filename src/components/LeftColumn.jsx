import React from "react";
import AreaChartComponent from "./AreaChartComponent";
import TableSmartContract from "./TableSmartContract";
import Sidebar from "./Sidebar";
import CardItem from "./CardItem";
import StatsCountItems from "./StatsCountItems";
import StatsWholeTxs from "./StatsWholeTxs";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      
      <div className="flex flex-col lg:flex-row gap-2 w-full">
        <StatsCountItems />
        <StatsWholeTxs />
        <CardItem />
      </div>
      <div className="flex-auto w-full">
      <TableSmartContract />
      <AreaChartComponent />

      </div>
    </div>
  );
};

export default LeftColumn;
