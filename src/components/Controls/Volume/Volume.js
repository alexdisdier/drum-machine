import React from 'react';

import './Volume.scss';

const volume = () => (
  <input type="range" step="0.01" min="0" max="1"/>
);


export default volume;
