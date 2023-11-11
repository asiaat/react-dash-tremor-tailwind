import React from "react";
import SalesItem from "./SalesItem";
import WebAnalytics from "./WebAnalytics";
import ScoreList from "./ScoreList";
import EthAddress from "./EthAddress";

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <EthAddress address={"0x9c66021bb6e54ad67adce73dfbb49ba198000bd8"}/>
      <SalesItem />
      <WebAnalytics />
      <ScoreList />
    </div>
  );
};

export default RightColumn;
