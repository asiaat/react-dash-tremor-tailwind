import React from "react";

import WebAnalytics from "./WebAnalytics";
import StatsNetworks from "./StatsNetworks";
import SalesItem from "./SalesItem";
import MetaCloud from "./MetaCloud";



const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <MetaCloud />
      <SalesItem />
      <StatsNetworks />
      
      <WebAnalytics />
      
    </div>
  );
};

export default RightColumn;
