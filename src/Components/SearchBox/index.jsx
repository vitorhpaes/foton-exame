import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useBook } from '../../Contexts/BooksContext';

import './style.css';

function SearchBox() {

  const { searchQuery, setSearchQuery } = useBook();

  return (<div className="search-box">
    <FiSearch className="search-icon"/>
    <input 
    type="search" 
    className="search-input" 
    placeholder="Search book" 
    onChange={e => setSearchQuery(e.target.value)} 
    value={searchQuery}/>
  </div>);
}

export default SearchBox;