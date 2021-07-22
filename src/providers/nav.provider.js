import React, { useState, createContext } from 'react';

export const NavContext = createContext({
  showNav: null,
  setShowNav: () => {},
});

NavContext.displayName = 'NavContext';

const NavProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavContext.Provider
      value={{
        showNav,
        setShowNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
