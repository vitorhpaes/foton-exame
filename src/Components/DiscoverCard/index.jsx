import React from 'react';

import './style.css';

function DiscoverCard({ book, colorKey }) {

  const randomColor = [
    "#00173D",
    "#451475",
    "#EEF5DB"
  ]

  const myColor = randomColor[colorKey];

  return <div className="discover-book-card" style={{ backgroundColor: myColor }}>
    {book.title}
    <br/>
    {book.author}
    <br/>
    {book.lines}
  </div>;
}

export default DiscoverCard;