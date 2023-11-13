import React, { useState, useEffect } from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const StatsCountItems = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://cyberplanet.tech/php/stats_total_supply.php') 
      .then(response => response.json())
      .then(data => {
        setData(data); 
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text >  TOTAL SUPPLY </Text>
        <BadgeDelta deltaType="moderateIncrease">+12.5% per m</BadgeDelta>
      </Flex>
      <Metric>{data.value}</Metric>
    </Card>
  );
};

export default StatsCountItems;
