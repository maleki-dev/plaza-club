import { useEffect } from 'react';

const useClickInside = (ref, callBack) => {
  const handleClick = e => {
    if (ref.current && ref.current.contains(e.target)) {
      callBack();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  });
};

export default useClickInside;
