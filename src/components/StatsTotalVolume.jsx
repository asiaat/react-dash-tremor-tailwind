import React, { useState, useEffect } from "react";
import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const StatsTotalVolume = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://cyberplanet.tech/php/stats_total_volume.php') 
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
        <Text >  TOTAL VOLUME </Text>
        <BadgeDelta deltaType="moderateIncrease">+25.7% per m</BadgeDelta>
      </Flex>
      <Metric>{data.value} ETH</Metric>
    </Card>
  );
};

export default StatsTotalVolume;
