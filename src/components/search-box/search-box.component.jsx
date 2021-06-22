import React, { useState, useEffect, useRef } from 'react';
import * as S from './search-box.styles';
import { ReactComponent as SearchIcon } from '../../assets/images/svg/__search.svg';
import SearchContent from '../search-content/search-content.component';

const searchInputProps = {
  type: 'text',
  placeholder: 'نام کالا دسته بندی یا برند را وارد کنید',
};

const SearchBox = () => {
  const [searchBoxHidden, setSearchBoxHidden] = useState(true);
  const clickRef = useRef(null);

  useEffect(() => {
    const handleWindowClick = e => {
      clickRef.current.contains(e.target) ? setSearchBoxHidden(false) : setSearchBoxHidden(true);
    };
    if (!searchBoxHidden) {
      window.addEventListener('click', handleWindowClick);
    } else if (searchBoxHidden) {
      window.removeEventListener('click', handleWindowClick);
    }
    return () => window.removeEventListener('click', handleWindowClick);
  }, [searchBoxHidden]);

  return (
    <S.SearchBox
      ref={clickRef}
      onClick={() => {
        setSearchBoxHidden(false);
      }}
    >
      <S.SearchInput {...searchInputProps} />
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
      {searchBoxHidden ? null : (
        <S.SearchBoxContent>
          <SearchContent />
        </S.SearchBoxContent>
      )}
    </S.SearchBox>
  );
};

export default SearchBox;
