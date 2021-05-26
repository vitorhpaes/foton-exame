import React from 'react';
import wave from '../../Assets/images/wave-reading.svg';

import './style.css';

function HomeDefaultSection({ children, title, moreText, overflow, showWave = false }) {

  const showMessageNotDisponible = () => alert('Not disponible yet');

  return <div className="home-default-section" style={{overflow: !overflow ? "auto" : overflow}}>
    {showWave && <img src={wave} className="svg-wave-section" alt="decoration"/>}
    <h4 className="title">
      {title}
      <div className="link" onClick={showMessageNotDisponible}>{moreText}</div>
    </h4>
    <div className="section-body">
      {children}
    </div>
  </div>;
}

export default HomeDefaultSection;