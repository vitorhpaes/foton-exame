import React from 'react';
import randomize from '../../Services/randomize';
import chartIcon from '../../Assets/images/bar_icon.svg';
import { useHistory } from 'react-router-dom';

import './style.css';

function DiscoverCard({ book: completeInfo }) {

  const history = useHistory();
  const isMyBook = !completeInfo.volumeInfo;
  const book = completeInfo.volumeInfo ? completeInfo.volumeInfo : completeInfo;
  const bookId = completeInfo.id;

  const randomColor = [
    "#00173D",
    "#451475",
  ]

  const colorKey = randomize(0, 2);
  const myColor = randomColor[colorKey];

  const getBookPage = () => {
    history.push(`book/${bookId}`);
  }

  return (<div className="discover-book-card" style={{ backgroundColor: myColor }} onClick={getBookPage}>

    <div className="left-content" style={{ maxWidth: book.imageLinks ? "70%" : 'none' }}>
      <h2 className="book-title">{book.title}</h2>
      <i className="authors">
        <span className="first-author">{!!book.authors && book.authors[0]}</span>
        {(!!book.authors && book.authors.length > 1) && <span> and more {book.authors.length - 1}</span>}
      </i>
      <div className="relevance">
        <img src={chartIcon} className="icon" />
        120+
        <span>Read now</span>
      </div>
    </div>

    {book.imageLinks && <div className="book-image">
      <img src={book.imageLinks.thumbnail}></img>
    </div>}

  </div>);
}

export default DiscoverCard;