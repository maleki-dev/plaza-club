import { useEffect } from 'react';

const useClickOutside = (ref, callBack) => {
  useEffect(() => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callBack();
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useClickOutside;
