import React, { useState, useRef } from 'react';
import * as S from './search-box.styles';
import SearchContent from '../search-content/search-content.component';
import useClickInside from '../../helpers/useClickInside.hook';
import useClickOutside from '../../helpers/useClickOutside.hook';
import SearchInput from '../search-input/search-input.component';

const SearchBox = () => {
  const [searchBoxHidden, setSearchBoxHidden] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const clickRef = useRef(null);
  const [debounce, setDebounce] = useState(undefined);

  const handleChange = e => {
    clearTimeout(debounce);
    setDebounce(
      setTimeout(() => {
        setSearchBoxHidden(e.target.value.length === 1);
        setInputValue(e.target.value);
      }, 500),
    );
  };

  useClickInside(clickRef, () => setSearchBoxHidden(false));
  useClickOutside(clickRef, () => setSearchBoxHidden(true));

  return (
    <S.SearchBoxContainer>
      <SearchInput ref={clickRef} $handleChange={handleChange} $hasIcon={true} />
      {searchBoxHidden ? null : (
        <S.SearchBoxContent>
          <SearchContent input={inputValue} />
        </S.SearchBoxContent>
      )}
    </S.SearchBoxContainer>
  );
};

export default SearchBox;
