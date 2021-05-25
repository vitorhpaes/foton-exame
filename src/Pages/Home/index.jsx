import React from 'react';
import SearchBox from '../../Components/SearchBox';
import HomeDefault from './Default';

import './style.css';

function Home() {

  return <section id="home">
    <SearchBox />
    <HomeDefault />
  </section>;
}

export default Home;