import { createContext, useContext, useState, useEffect } from 'react';
import { getVolumes } from '../Services/googleAPI';

const BookContext = createContext({});
let timeoutLive = false;

export const BookProvider = ({ children }) => {

  const [reading, setReading] = useState(['eLRhDgAAQBAJ']);
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    getLocalReading();
  }, []);

  useEffect(() => {

    if (!searchQuery) return;

    setSearching(true);

    if(timeoutLive) clearTimeout(timeoutLive);

    timeoutLive = setTimeout(() => {
      const doAsync = async () => {
        const result = await getVolumes(searchQuery);
        setSearching(false);
        if(result.totalItems === 0) return setSearchedBooks([]);

        setSearchedBooks(result.items);
      }
      doAsync();
    }, 400);

  }, [searchQuery])

  const addReading = (newBookId) => {

    if(reading.includes(newBookId)) return alert('This book is already in the current reading list');;

    const newBooksReading = [...reading, newBookId];
    setReading(newBooksReading);

    const newBooksReadingSTRING = JSON.stringify(newBooksReading);
    localStorage.setItem('@foton-exame/reading', newBooksReadingSTRING);

    alert('Added in the current reading list');

    return newBooksReading;

  }

  const getLocalReading = () => {

    const booksReadingSTRING = localStorage.getItem('@foton-exame/reading');
    if (!booksReadingSTRING) return setReading([]);

    const booksReading = JSON.parse(booksReadingSTRING);
    setReading(booksReading);

    return booksReading;

  }

  const defaultValue = { reading, searchedBooks, searchQuery, searching, setSearchQuery, setSearchedBooks, addReading, getLocalReading };

  return <BookContext.Provider value={defaultValue}>
    {children}
  </BookContext.Provider>

}

export const useBook = () => useContext(BookContext);