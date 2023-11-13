import React from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const StatsWholeTxs = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text >  Txs together </Text>
        <BadgeDelta deltaType="moderateIncrease">+25.7% per m</BadgeDelta>
      </Flex>
      <Metric>128,304</Metric>
    </Card>
  );
};

export default StatsWholeTxs;
