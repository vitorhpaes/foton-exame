import React, { useEffect, useState } from 'react';
import DiscoverCard from '../../Components/DiscoverCard';
import HomeDefaultSection from '../../Components/HomeDefaultSection';
import randomize from '../../Services/randomize';
import { getVolumes } from '../../Services/googleAPI';
import { useBook } from '../../Contexts/BooksContext';
import ReadingCard from '../../Components/ReadingCard';
import ReviewCard from '../../Components/ReviewCard';

function HomeDefault() {

  const [username] = useState('Mehmed Al Faith');

  const [discoverBooks, setDiscoverBooks] = useState([]);

  const { reading } = useBook();

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
      {discoverBooks.map((book, key) => <DiscoverCard book={book} key={key} />)}
    </HomeDefaultSection>
    <HomeDefaultSection title="Currently Reading" moreText="All" overflow="visible">
      {!!reading.length && <ReadingCard bookId={reading[reading.length-1]} />}
    </HomeDefaultSection>
    <HomeDefaultSection title="Reaviews of The Days" moreText="All Video">
      {!!discoverBooks.length && <ReviewCard book={discoverBooks[0]} />}
    </HomeDefaultSection>
  </div>;

}

export default HomeDefault;