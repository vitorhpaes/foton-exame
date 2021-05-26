import React from 'react';
import defaultImage from '../../Assets/images/default-book-image.jpg';
import { useHistory } from 'react-router-dom';

import './style.css'

function SearchCard({ book: completeInfo }) {

  const history = useHistory();
  const book = !completeInfo.volumeInfo ? completeInfo : completeInfo.volumeInfo;
  const bookId = completeInfo.id;
  const isMyBook = !completeInfo.volumeInfo;

  let authorsLength;
  let firstAuthor;
  if (!isMyBook) {
    authorsLength = !!book.authors && book.authors.length;
    firstAuthor = authorsLength ? book.authors[0] : "whitout authorship";
  } else {
    authorsLength = !!book.authors && book.authors.length;
    firstAuthor = authorsLength ? book.authors[0].name : "whitout authorship";
  }

  return <div className="search-card" onClick={() => history.push(`/book/${bookId}`)}>
    <div className="search-card-image">
      <img src={!!book.imageLinks ? book.imageLinks.thumbnail : defaultImage} alt="book-thumb"/>
    </div>
    <div className="bookInfo">
      <h4 className="title">{book.title}</h4>
      {!!book.authors && (
        <div className="authors">
          by {firstAuthor}
          {authorsLength > 1 && ` and more ${authorsLength - 1}`}
        </div>
      )}
    </div>
  </div>;
}

export default SearchCard;