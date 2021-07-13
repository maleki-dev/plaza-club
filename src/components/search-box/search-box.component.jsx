import React, { useState, useRef } from 'react';
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
  const clickRef = useRef(null);

  useClickInside(clickRef, () => setSearchBoxHidden(false));
  useClickOutside(clickRef, () => setSearchBoxHidden(true));

  return (
    <S.SearchBoxContainer>
      <S.SearchBox ref={clickRef}>
        <S.SearchInput {...searchInputProps} />
        <S.SearchButton>
          <SearchIcon />
        </S.SearchButton>
      </S.SearchBox>
      {searchBoxHidden ? null : (
        <S.SearchBoxContent>
          <SearchContent />
        </S.SearchBoxContent>
      )}
    </S.SearchBoxContainer>
  );
};

export default SearchBox;
