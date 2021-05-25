import React, { useState } from 'react';

function HomeDefault() {

  const [username, setUsername] = useState('Mehmed Al Faith');

  return <div>
    <h3 className="hello">Hi, <span className="username">{username}</span> 👋</h3>
  </div>;

}

export default HomeDefault;