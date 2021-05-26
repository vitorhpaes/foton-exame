import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import defaultImage from '../../Assets/images/default-book-image.jpg';
import * as Fi from 'react-icons/fi';

import './style.css';
import { getBook } from '../../Services/googleAPI';
import { useNavigation } from '../../Contexts/NavigationContext';
import { useBook } from '../../Contexts/BooksContext';

function Book() {

  const { id } = useParams();
  const history = useHistory();
  const { setShowSubmenu } = useNavigation();

  const [book, setBook] = useState(false);

  let imageToUse = defaultImage;
  if (book.imageLinks?.thumbnail) imageToUse = book.imageLinks.thumbnail;

  const returnPage = () => {

    setShowSubmenu(true);
    history.goBack();

  }

  useEffect(() => {
    setShowSubmenu(false);
    const doAsync = async () => {
      const result = await getBook(id);
      setBook(result.volumeInfo);
    }
    doAsync();
  }, [id]);

  return <section id="description">
    <div className="header">
      <Fi.FiArrowLeft class="return" onClick={returnPage} />
      <div className="book-image">
        <img src={imageToUse} />
      </div>
    </div>
    <div className="body">
      <h3 className="book-title">
        <b>{book.title}</b>
      </h3>
      <h6 className="book-authors">
        <b>{book.authors && book.authors.map((author, key) => {
          const counter = key + 1;
          if (counter < book.authors.length) return <> {author},</>
          return <> {author}</>
        })}</b>
      </h6>
      <p className="description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(book.description)}}></p>
    </div>
    <Footer bookId={id}/>
  </section>;
}

const Footer = ({bookId}) => {

  const { addReading } = useBook();

  return (
    <div className="footer">
      <div className="group-buttons">
        <button onClick={() => addReading(bookId)}>
          <Fi.FiBookOpen className="button-icon" />
          Read
        </button>
        <div className="divisory" />
        <button>
          <Fi.FiHeadphones className="button-icon" />
          Listen
        </button>
        <div className="divisory" />
        <button>
          <Fi.FiShare className="button-icon" />
          Share
        </button>
      </div>
    </div>
  )

}

export default Book;