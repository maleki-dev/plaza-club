import { useEffect } from 'react';

const useClickOutside = (buttonRef, dropdownRef, callBack) => {
  useEffect(() => {
    const handleClick = e => {
      if (
        buttonRef.current &&
        dropdownRef.current &&
        !buttonRef.current.contains(e.target) &&
        !dropdownRef.current.contains(e.target)
      ) {
        callBack();
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [buttonRef, dropdownRef, callBack]);
};

export default useClickOutside;
