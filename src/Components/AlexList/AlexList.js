import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import InputOutput from './InputOutput/InputOutput';
import Local from '../../services/Persistence';

export default function AlexList() {
  const list = Local.load();

  const [all, setAll] = useState(list);
  const [text, setText] = useState('');
  const [color, setColor] = useState('black');
  
  function itemClicked(e, newText, newColor, index) {
    console.log('item clicked');
    setText(newText);
    setColor(newColor);
    let newAll = all.filter((item) => item.index != index);
    setAll(newAll);
  }

  function savePressed(newText, newColor) {

    const textStyles = {
      color: newColor,
      top: '50px',
      display: 'block',
    };

    const index = all.length.toString();
    let newAll = all.concat({ index, style: textStyles, text: newText });

    setAll(newAll);
    Local.save(newAll);
  }

  useEffect(() => {
    console.log('all', all);
  }, []);
  return (
    <div>
      <Sidebar all={all} itemClicked={itemClicked} setAll={setAll} />
      <InputOutput
        setColor={setColor}
        setText={setText}
        savePressed={savePressed}
        color={color}
        text={text}
      />
      hello
    </div>
  );
}
