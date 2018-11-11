import React from 'react';

const GreenLight = ({ direction }) => {
  switch (direction) {
    case 'go':
      return <div className="greenOn" />;
    case 'stop':
    case 'yield':
      return <div className="off" />;
  }
};

export default GreenLight;
