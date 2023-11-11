import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const EthAddress = ({ address }) => {
  const [copied, setCopied] = useState(false);

  const shortenEthAddress = (address) => {
    if (!address || address.length < 11) {
      return address;
    }
    return `${address.slice(0, 5)}...${address.slice(-3)}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Reset 'copied' state after 3 seconds
    });
  };

  const ethAddressStyle = {
    position: 'relative',
    display: 'inline-block'
  };

  const tooltipStyle = {
    position: 'absolute',
    top: '-35px', // Reguleerige vastavalt vajadusele
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '5px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '5px',
    fontSize: '12px',
    display: copied ? 'block' : 'none' // Näita tooltipi ainult siis, kui 'copied' on true
  };

  const copyButtonStyle = {
    position: 'relative'
  };

  return (
    <div style={ethAddressStyle}>
      <span>{shortenEthAddress(address)}</span>
      <button onClick={handleCopy} style={copyButtonStyle}>
        <FontAwesomeIcon icon={faCopy} />
        <div style={tooltipStyle}>copied!</div>
      </button>
    </div>
  );
};

export default EthAddress;
