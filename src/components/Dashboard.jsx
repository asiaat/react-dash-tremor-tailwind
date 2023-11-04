
import React from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Dashboard = () => {
    <div className="flex">
   
    <div className="flex flex-col flex-1 relative">
      <Navbar />
     
      <div className="grid md:grid-cols-3 grid-cols-1 w-full">
        <div className="col-span-2">
          <LeftColumn />
        </div>
        <div className="w-full">
          <RightColumn />
        </div>
      </div>
    </div>
  </div>
};

export default Dashboard;
