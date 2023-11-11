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
import SortableTableHeader from './SortableTableHeader'; // Lisage see rida


const TableSmartContract = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });


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


  const onSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  
  const getExplorerUrl = (network, address) => {
    switch (network) {
      case 'ethereum':
        return `https://etherscan.io/address/${address}`;
      case 'polygon':
        return `https://polygonscan.com/address/${address}`;
      case 'solana':
          return `https://explorer.solana.com/address/${address}`;
      case 'tezos':
          return `https://tzkt.io/${address}`;
      default:
        return '#'; // Või mingi vaikimisi URL
    }
  };


  return (
    <Card className="mt-4">
      <Title>Dynamic Smart Contracts</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            
          
            <SortableTableHeader title="name" onSort={onSort} isSortedAsc={sortConfig.key === 'collection_name' && sortConfig.direction === 'ascending'} isSortedDesc={sortConfig.key === 'collection_name' && sortConfig.direction === 'descending'} />
            <SortableTableHeader title="contract" onSort={onSort} isSortedAsc={sortConfig.key === 'contract_address' && sortConfig.direction === 'ascending'} isSortedDesc={sortConfig.key === 'contract_address' && sortConfig.direction === 'descending'} />
            <SortableTableHeader title="Created By" onSort={onSort} isSortedAsc={sortConfig.key === 'creator_address' && sortConfig.direction === 'ascending'} isSortedDesc={sortConfig.key === 'creator_address' && sortConfig.direction === 'descending'} />
            <SortableTableHeader title="network" onSort={onSort} isSortedAsc={sortConfig.key === 'network' && sortConfig.direction === 'ascending'} isSortedDesc={sortConfig.key === 'network' && sortConfig.direction === 'descending'} />
            <SortableTableHeader title="standard" onSort={onSort} isSortedAsc={sortConfig.key === 'standard' && sortConfig.direction === 'ascending'} isSortedDesc={sortConfig.key === 'standard' && sortConfig.direction === 'descending'} />
            <SortableTableHeader title="website" onSort={onSort} isSortedAsc={sortConfig.key === 'website' && sortConfig.direction === 'ascending'} isSortedDesc={sortConfig.key === 'website' && sortConfig.direction === 'descending'} />
            
            

          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.collection_name}</TableCell>
              

              <TableCell>
                <a href={getExplorerUrl(item.network, item.contract_address)} target="_blank" rel="noopener noreferrer">
                  <Text><EthAddress address={item.contract_address} /></Text>
                </a>
              </TableCell>
              <TableCell>
                <Text><EthAddress address={item.creator_address} /></Text>
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
