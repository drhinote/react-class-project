import React, { useState, useEffect } from 'react';
import { sha256 } from 'js-sha256';
import Slider from '../Slider/Slider';
import { Button } from '@mui/material';

export default function InputOutput({
  savePressed,
  color,
  setColor,
  text,
  setText,
}) {
  const textStyles = {
    color: color,
    top: '50px',
    display: 'block',
  };

  const innerContainerStyles = {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    // marginLeft: '75px',
    marginTop: '50px',
    alignItems: 'center',
  };

  const buttonStyles = {
    border: '1px solid black',
    marginLeft: '20px',
    border: '3px solid RGB(245, 111, 66)',
  };

  const containerStyles = {
    padding: '15px',
    margin: '0px',
    height: window.innerHeight,
    width: window.innerWidth,
    margin: 0,
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
    background: 'RGB(255, 219, 207)',
  };

  const inputStyle = {
    width: '150px',
    height: '35px',
    borderRadius: '5px',
    border: '3px solid RGB(245, 111, 66)',
  };

  function handleChange(e) {
    var hash = sha256(e.target.value);
    var color = '#' + hash.substring(0, 6);
    setText(e.target.value);
    setColor(color);
  }

  function save() {
    savePressed(text, color);
    setText('');
  }

  return (
    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        <input onChange={handleChange} value={text} style={inputStyle} />
        <Button style={buttonStyles} onClick={save}>
          save
        </Button>
      </div>
      <p style={textStyles}>{text}</p>
      <Slider color={color} setColor={setColor} />
    </div>
  );
}
