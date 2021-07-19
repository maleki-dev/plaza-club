import React, { useRef, useState, useEffect } from 'react';
import * as S from './search-content.styles';
import SearchInput from '../../search-input/search-input.component';
import { ReactComponent as CrossIcon } from '../../../assets/images/svg/cross.svg';
import SearchContent from '../../search-content/search-content.component';

const SearchContentMobile = ({ $open, $onClose }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [debounce, setDebounce] = useState(undefined);
  const [showContent, setShowContent] = useState(true);

  const handleChange = e => {
    clearTimeout(debounce);
    setDebounce(
      setTimeout(() => {
        setShowContent(e.target.value.length !== 1);
        setInputValue(e.target.value);
      }, 500),
    );
  };

  useEffect(() => {
    inputRef.current.firstElementChild.focus();
  }, [$open]);

  return (
    <S.Container $open={$open}>
      <S.Top>
        <SearchInput ref={inputRef} $handleChange={handleChange} />
        <CrossIcon onClick={$onClose} />
      </S.Top>
      <S.Bottom>{showContent ? <SearchContent input={inputValue} /> : null}</S.Bottom>
    </S.Container>
  );
};

export default SearchContentMobile;
