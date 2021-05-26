import React from 'react';
import SearchBox from '../../Components/SearchBox';
import { useBook } from '../../Contexts/BooksContext';
import HomeDefault from './Default';
import HomeSearch from './Search';

import './style.css';

function Home() {

  const { searchQuery } = useBook();

  return <section id="home">
    <SearchBox />
    {!!searchQuery ? <HomeSearch /> : <HomeDefault />}
  </section>;
}

export default Home;