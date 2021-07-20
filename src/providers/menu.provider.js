import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
  parent: null,
  child: null,
  setParent: () => {},
  setChild: () => {},
});

const MenuProvider = ({ children }) => {
  const [parent, setParent] = useState({ parentId: null });
  const [child, setChild] = useState({ parentId: null, childId: null });

  return (
    <MenuContext.Provider
      value={{
        parent,
        setParent,
        child,
        setChild,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
