import React, { useState } from 'react';
import DiscoverCard from '../../Components/DiscoverCard';
import HomeDefaultSection from '../../Components/HomeDefaultSection';


function HomeDefault() {

  const [username, setUsername] = useState('Mehmed Al Faith');

  const defaultData = [
    {
      title: 'Hooked',
      author: 'Nir Eyal',
      countPages: 120
    },
    {
      title: 'The Discover',
      author: 'Garry Kellyn',
      countPages: 90
    }
  ];

  return <div>
    <h3 className="hello">Hi, <span className="username">{username}</span> 👋</h3>
    <HomeDefaultSection title="Discover new book" moreText="More">
      {defaultData.map((book, key) => <DiscoverCard book={book} key={key} colorKey={key}/>)}
      {defaultData.map((book, key) => <DiscoverCard book={book} key={key} colorKey={key}/>)}
      {defaultData.map((book, key) => <DiscoverCard book={book} key={key} colorKey={key}/>)}
    </HomeDefaultSection>
  </div>;

}

export default HomeDefault;