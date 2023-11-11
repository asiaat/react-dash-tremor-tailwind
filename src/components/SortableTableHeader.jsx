// SortableTableHeader.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const SortableTableHeader = ({ title, isSortedAsc, isSortedDesc, onSort }) => {
  return (
    <th onClick={() => onSort(title)}>
      {title}{' '}
      {isSortedAsc && <FontAwesomeIcon icon={faSortUp} />}
      {isSortedDesc && <FontAwesomeIcon icon={faSortDown} />}
    </th>
  );
};

export default SortableTableHeader;
