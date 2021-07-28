import { useEffect, useCallback } from 'react';

const useClickInside = (ref, callBack) => {
  const handleClick = useCallback(
    e => {
      if (ref.current && ref.current.contains(e.target)) {
        callBack();
      }
    },
    [ref, callBack],
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export default useClickInside;
