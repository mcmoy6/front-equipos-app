import React from 'react';

import './tickets_styles.css';


export const Highlight = ({ children, toHighlight }) => {
    
  const regex = new RegExp(`(${toHighlight})`, 'i')
  return children.split(regex).map((chunk, index) => {

    if (chunk.toLowerCase() === toHighlight.toLowerCase() && toHighlight.length > 0) {
      return <mark key={index}>{chunk}</mark>
    }

    return chunk;

  });
}

