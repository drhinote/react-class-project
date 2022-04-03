import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ router }) {

  const navStyles = {
    display: 'flex',
    gridDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'aquamarine',
    flexWrap: 'wrap',
  };

  const linkStyles = {
    margin: '10px',
    cursor: 'pointer',
  };

  return (
    <nav style={navStyles}>
      {router.routes.map(key => <p onClick={(e) => router.navigate(key)}>{key} </p>)}
      {/* DCM = added a space beteen navbar links. */}    
    </nav>
  );
}
