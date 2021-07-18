import React, { useState, useRef, useEffect } from 'react';
import * as S from './search-box.styles';
import { ReactComponent as SearchIcon } from '../../assets/images/svg/__search.svg';
import SearchContent from '../search-content/search-content.component';
import useClickInside from '../../helpers/useClickInside.hook';
import useClickOutside from '../../helpers/useClickOutside.hook';

const searchInputProps = {
  type: 'text',
  placeholder: 'نام کالا دسته بندی یا برند را وارد کنید',
};

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

  useEffect(() => {
    console.log({ debounce, inputValue });
  }, [debounce, inputValue]);

  useClickInside(clickRef, () => setSearchBoxHidden(false));
  useClickOutside(clickRef, () => setSearchBoxHidden(true));

  return (
    <S.SearchBoxContainer>
      <S.SearchBox ref={clickRef}>
        <S.SearchInput {...searchInputProps} onChange={handleChange} />
        <S.SearchButton>
          <SearchIcon />
        </S.SearchButton>
      </S.SearchBox>
      {searchBoxHidden ? null : (
        <S.SearchBoxContent>
          <SearchContent input={inputValue} />
        </S.SearchBoxContent>
      )}
    </S.SearchBoxContainer>
  );
};

export default SearchBox;
