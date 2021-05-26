import React from 'react';

import './style.css';

function HomeDefaultSection({ children, title, moreText, overflow }) {

  const showMessageNotDisponible = () => alert('Not disponible yet');

  return <div className="home-default-section" style={{overflow: !overflow ? "auto" : overflow}}>
    <h4 className="title">
      {title}
      <a className="link" onClick={showMessageNotDisponible}>{moreText}</a>
    </h4>
    <div className="section-body">
      {children}
    </div>
  </div>;
}

export default HomeDefaultSection;