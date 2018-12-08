import React from 'react';

import './Display.scss';

const display = (props) => {
  return (
    <div id="display">
      <ul className={props.dataFromControl}>
        <li>key: {props.displayId}</li>
        <li>sound: {props.displayName}</li>
      </ul>
    </div>
  )
};

export default display;
