import React from 'react';

import './style.css';

function HomeDefaultSection({ children, title, moreText }) {
  return <div className="home-default-section">
    <h4 className="title">
      {title}
      <a className="link">{moreText}</a>
    </h4>
    <div className="section-body">
      {children}
    </div>
  </div>;
}

export default HomeDefaultSection;