import React from "react";
import AreaChartComponent from "./AreaChartComponent";
import TableSmartContract from "./TableSmartContract";

const LeftColumn = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      
      <div className="flex-auto w-full">
      <TableSmartContract />
      <AreaChartComponent />

      </div>
    </div>
  );
};

export default LeftColumn;
