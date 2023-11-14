import React, { useState } from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Dashboard = () => {

    const [isTableExpanded, setIsTableExpanded] = useState(true);

    const toggleTableSize = () => {
        setIsTableExpanded(!isTableExpanded);
    };


    return (
        <main className="flex">
            <div className={`flex flex-col flex-1 relative ${isTableExpanded ? 'w-full' : ''}`}>
                <div className={`grid ${isTableExpanded ? 'grid-cols-1' : 'md:grid-cols-3 grid-cols-1'} w-full`}>
                    <div className={`${isTableExpanded ? 'col-span-1' : 'col-span-2'}`}>
                        <LeftColumn isTableExpanded={isTableExpanded} toggleTableSize={toggleTableSize} />
                    </div>
                    {!isTableExpanded && (
                        <div className="w-full">
                            <RightColumn />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
  };
  
  export default Dashboard;
  
