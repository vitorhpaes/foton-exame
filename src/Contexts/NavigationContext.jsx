import { createContext, useContext, useState, useEffect } from 'react';

const NavContext = createContext({});

export const NavProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState('Home');

  const defaultValue = { currentPage, setCurrentPage };

  return <NavContext.Provider value={defaultValue}>
    {children}
  </NavContext.Provider>

}

export const useNavigation = () => useContext(NavContext);