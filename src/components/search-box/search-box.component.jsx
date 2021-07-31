import React, { useState, useRef } from 'react';
import * as S from './search-box.styles';
import SearchContent from '../search-content/search-content.component';
import useClickInside from '../../helpers/useClickInside.hook';
import useClickOutside from '../../helpers/useClickOutside.hook';
import SearchInput from '../search-input/search-input.component';

const SearchBox = () => {
  const [searchBoxHidden, setSearchBoxHidden] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
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

  useClickInside(buttonRef, () => setSearchBoxHidden(false));
  useClickOutside(buttonRef, dropdownRef, () => setSearchBoxHidden(true));

  return (
    <S.SearchBoxContainer>
      <SearchInput ref={buttonRef} $handleChange={handleChange} $hasIcon={true} />
      {searchBoxHidden ? null : (
        <S.SearchBoxContent ref={dropdownRef}>
          <SearchContent input={inputValue} />
        </S.SearchBoxContent>
      )}
    </S.SearchBoxContainer>
  );
};

export default SearchBox;
