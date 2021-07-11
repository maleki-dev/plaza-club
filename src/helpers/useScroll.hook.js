import { useState, useCallback, useEffect } from 'react';

const useScroll = callBack => {
  const [scroll, setScroll] = useState(0);

  const scrollHandler = useCallback(() => {
    let currentScroll = document.documentElement.scrollTop;
    callBack(scroll < currentScroll);
    setScroll(currentScroll);
  }, [scroll]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);
};

export default useScroll;
