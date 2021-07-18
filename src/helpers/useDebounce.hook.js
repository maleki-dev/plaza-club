import { useState } from 'react';

const useDebounce = (callback, delay) => {
  const [debounce, setDebounce] = useState(undefined);

  return [
    debounce,
    () => {
      clearTimeout(debounce);
      setDebounce(setTimeout(callback, delay));
    },
  ];
};

export default useDebounce;
