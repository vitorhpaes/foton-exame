import React, { useState, useEffect } from 'react';
import { getBook } from '../../Services/googleAPI';
import readingBookIcon from '../../Assets/images/reading_book.svg';
import wave from '../../Assets/images/wave-reading.svg';

import './style.css';

function ReadingCard({ bookId }) {

  const [book, setBook] = useState(false);

  useEffect(() => {

    const doAsync = async () => {
      const result = await getBook(bookId);
      setBook(result.volumeInfo);
    }
    doAsync();

  }, [bookId]);

  return (<div className="reading-book-card">
    <img src={wave} className="reading-wave" alt="wave-decoration"/>

    {(!!book && !!book.imageLinks) && <div className="book-image">
      <img src={book.imageLinks.smallThumbnail} alt="book-thumbnail"></img>
    </div>}

    <div className="right-content" style={{ maxWidth: book.imageLinks ? "70%" : 'none' }}>
      <h2 className="book-title">{book.title}</h2>
      <i className="authors">
        <span className="first-author">by {!!book.authors && book.authors[0]}</span>
        {(!!book.authors && book.authors.length > 1) && <span> and more {book.authors.length - 1}</span>}
      </i>
      <div className="part">
        <img src={readingBookIcon} alt="reading-book-icon"/>
        Chapter <span>2</span> From 9
      </div>
    </div>

  </div>);

}

export default ReadingCard;