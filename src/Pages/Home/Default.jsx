import React, { useEffect, useState } from 'react';
import DiscoverCard from '../../Components/DiscoverCard';
import HomeDefaultSection from '../../Components/HomeDefaultSection';
import randomize from '../../Services/randomize';
import { getVolumes } from '../../Services/googleAPI';

const defaultQueries = {
  discover: [
    'google',
    'web development',
    'reactjs',
    'nodejs',
    'notebook'
  ]
}

function HomeDefault() {

  const myQueryIndex = randomize(0, 5);
  const [username] = useState('Mehmed Al Faith');

  const query = defaultQueries.discover[myQueryIndex];
  const [discoverBooks, setDiscoverBooks] = useState([]);

  useEffect(() => {

    const doAsync = async () => {
      const result = await getVolumes('hooked');
      setDiscoverBooks(result.items);
    }
    doAsync();

  }, []);

  return <div>
    <h3 className="hello">Hi, <span className="username">{username}</span> 👋</h3>
    <HomeDefaultSection title="Discover new book" moreText="More">
      {discoverBooks.map((book, key) => <DiscoverCard book={book.volumeInfo} key={key}/>)}
    </HomeDefaultSection>
    <HomeDefaultSection title="Currently Reading" moreText="All">
      {discoverBooks.map((book, key) => <DiscoverCard book={book.volumeInfo} key={key}/>)}
    </HomeDefaultSection>
    <HomeDefaultSection title="Reaviews of The Days" moreText="All Video">
      {discoverBooks.map((book, key) => <DiscoverCard book={book.volumeInfo} key={key}/>)}
    </HomeDefaultSection>
  </div>;

}

export default HomeDefault;