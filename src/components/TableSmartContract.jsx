import React, { useState, useEffect } from "react";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";
import EthAddress from "./EthAddress";

const TableSmartContract = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://cyberplanet.tech/php/smartc_load.php') // Asenda see URL oma PHP skripti URL-iga
      .then(response => response.json())
      .then(data => {
        setData(data); // Seadista laetud andmed
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []); // Tühi sõltuvuste massiiv tähendab, et see käivitatakse ainult komponendi laadimisel

  return (
    <Card className="mt-4">
      <Title>Dynamic Smart Contracts</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Contract</TableHeaderCell>
            <TableHeaderCell>Network</TableHeaderCell>
            <TableHeaderCell>Standard</TableHeaderCell>
            <TableHeaderCell>Website</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.collection_name}</TableCell>
              <TableCell>
                <Text><EthAddress address={item.contract_address} /></Text>
              </TableCell>
              <TableCell>
                <Text>{item.network}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.standard}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StatusOnlineIcon}>
                  {item.website}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableSmartContract;
