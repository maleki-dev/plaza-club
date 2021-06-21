import React from 'react';
import * as S from './SearchBox.styles';
import { ReactComponent as SearchIcon } from '../../assets/images/svg/__search.svg';

const SearchBox = () => {
  return (
    <S.SearchBox>
      <S.SearchInput type="text" />
      <S.SearchButton>
        <SearchIcon />
      </S.SearchButton>
    </S.SearchBox>
  );
};

export default SearchBox;
