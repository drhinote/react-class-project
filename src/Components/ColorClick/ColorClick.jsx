import { useState } from 'react';
import React, { useState } from 'react';


export function getRandomColor() {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}

export default function ContinuousSlider1() {
  const [value, setValue] = useState(null);
  const [color, setColor] = useState(null);
  const [count, setCount] = useState(0);
  const style = {
    color: color,
  };

 /* function handleClick(input) {  
    setCount(count + 1);
  }*/

  function getValue(input) {
    const newValue = input.target.value;
    setColor(getRandomColor());
    setValue(newValue+"Colortext");
    
  }

  return (
    <div style={style}>
      <button 
        title = "Click"
        color = {value}
        onClick={getValue}>
          Click to Change color
      </button> 
      <h1>{value}</h1>
    </div>
  );
}