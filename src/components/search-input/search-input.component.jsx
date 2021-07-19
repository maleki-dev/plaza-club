import React, { forwardRef } from 'react';
import * as S from './search-input.styles';
import { ReactComponent as SearchIcon } from '../../assets/images/svg/__search.svg';

const SearchInput = forwardRef((props, ref) => {
  const searchInputProps = {
    type: 'text',
    placeholder: 'نام کالا دسته بندی یا برند را وارد کنید',
  };

  const handleFocus = e => e.target.blur();

  return (
    <S.SearchBox ref={ref}>
      <S.SearchInput
        {...searchInputProps}
        onChange={props.$handleChange || null}
        onFocus={props.$noFocus ? handleFocus : null}
      />
      {props.$hasIcon ? (
        <S.SearchButton>
          <SearchIcon />
        </S.SearchButton>
      ) : null}
    </S.SearchBox>
  );
});

export default SearchInput;
