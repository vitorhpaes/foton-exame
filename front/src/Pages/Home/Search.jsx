import React from 'react';
import SearchCard from '../../Components/SearchCard';
import { useBook } from '../../Contexts/BooksContext';

function HomeSearch() {

  const { searchedBooks, searching } = useBook();

  if(searchedBooks.length === 0 && !searching) return <h3>Book not found</h3>

  return <section class="search-books">
    {searchedBooks.map((book, key) => <SearchCard book={book} key={key} />)}
  </section>;

}

export default HomeSearch;