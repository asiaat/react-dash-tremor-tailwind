import React from "react";

import WebAnalytics from "./WebAnalytics";
import StatsNetworks from "./StatsNetworks";


const RightColumn = () => {
  return (
    <div className="w-full p-2">
     
      <StatsNetworks />
      <WebAnalytics />
      
    </div>
  );
};

export default RightColumn;
