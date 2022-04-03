import React, { useState, useEffect } from 'react';

export default function Sidebar({ all, itemClicked, setAll }) {
  const sidebarStyles = {
    width: '150px',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'RGB(245, 164, 66)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    marginTop: '0px',
  };

  function handleClick(e) {
    itemClicked(e, item.text, item.style.color, item.index);
    // itemClicked(e, text, color, index);
    // const newAll = all.filter((item) => {
    //   return index != item.key;
    // });
    // setAll(newAll);
  }

  return (
    <ul style={sidebarStyles}>
      {all.map((item) => {
        return (
          // <li
          //   style={item.props.style}
          //   color={item.props.color}
          //   onClick={handleClick}
          //   key={item.key}
          //   index={item.key}
          // >
          //   {item.props.children}
          // </li>
          <li
            style={item.style}
            onClick={(e) => {
              itemClicked(e, item.text, item.style.color, item.index);
            }}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
}
