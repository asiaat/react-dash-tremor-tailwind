import React from "react";
import CardItem from "./CardItem";
import AreaChartComponent from "./AreaChartComponent";
import TableComponent from "./TableComponent";
import TableSmartContract from "./TableSmartContract";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Dashboard = () => {
    return (
        <main className="flex">
        
        <div className="flex flex-col flex-1 relative">
         
          <div className="grid md:grid-cols-3 grid-cols-1 w-full">
            <div className="col-span-2">
              <LeftColumn />
            </div>
            <div className="w-full">
              <RightColumn />
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Dashboard;
  
