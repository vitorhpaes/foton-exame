import React from 'react';
import manWithBookImage from '../../Assets/images/man_with_book.svg';

import './style.css';

function ReviewCard() {
  return <div className="review-card">
    <img src={manWithBookImage}/>
  </div>;
}

export default ReviewCard;