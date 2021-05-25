import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './style.css';

function SearchBox() {
  return (<div className="search-box">
    <FiSearch className="search-icon"/>
    <input type="search" className="search-input" placeholder="Search book"/>
  </div>);
}

export default SearchBox;