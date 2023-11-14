import React from "react";
import AreaChartComponent from "./AreaChartComponent";
import TableSmartContract from "./TableSmartContract";
import StatsCountItems from "./StatsCountItems";
import StatsWholeTxs from "./StatsWholeTxs";
import StatsTotalVolume from "./StatsTotalVolume";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons';


const LeftColumn = ({ isTableExpanded, toggleTableSize }) => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      
      <div className="flex flex-col lg:flex-row gap-2 w-full">
      <StatsTotalVolume />
        <StatsCountItems />
        <StatsWholeTxs />
        
      </div>
      
      
    <div className="flex-auto w-full">
        <TableSmartContract isTableExpanded={isTableExpanded} toggleTableSize={toggleTableSize} />
        {!isTableExpanded && <AreaChartComponent />}
      </div>

      <button onClick={toggleTableSize}>
        {isTableExpanded ? 'smaller' : 'bigger'}
      </button>
    </div>
  );
};

export default LeftColumn;
