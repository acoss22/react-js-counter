import React from 'react';
import './Button.css';

export const Button = (props) => {
  
  console.log("props " + JSON.stringify(props) );

  return (
    <button onClick={() =>
      props.sign == "+" ? props.updateCount(1) : props.updateCount(-1)} >
      {props.sign}
    </button>

  );
}


