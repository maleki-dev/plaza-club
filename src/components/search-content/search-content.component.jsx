import React from 'react';
import * as S from './search-content.styles';

const SearchContent = () => {
  return (
    <S.SearchContentContainer>
      <S.SearchContentHeader>نتایج جست‌وجو</S.SearchContentHeader>
      <S.SearchItem>موبایل</S.SearchItem>
      <S.SearchItem>تبلت</S.SearchItem>
    </S.SearchContentContainer>
  );
};

export default SearchContent;
