import { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext({});

export const BookProvider = ({ children }) => {

  const [reading, setReading] = useState([]);

  useEffect(() => {
    getLocalReading();
  }, []);

  const addReading = (newBookId) => {

    const newBooksReading = [...reading, newBookId];
    setReading(newBooksReading);

    const newBooksReadingSTRING = JSON.stringify(newBooksReading)
    localStorage.setItem('@foton-exame/reading', newBooksReadingSTRING);

    return newBooksReading;

  }

  const getLocalReading = () => {
    
    const booksReadingSTRING = localStorage.getItem('@foton-exame/reading');
    if(!booksReadingSTRING) return setReading([]);

    const booksReading = JSON.parse(booksReadingSTRING);
    setReading(booksReading);

    return booksReading;

  }

  const defaultValue = { reading, addReading, getLocalReading };

  return <BookContext.Provider value={defaultValue}>
    {children}
  </BookContext.Provider>

}

export const useBook = () => useContext(BookContext);