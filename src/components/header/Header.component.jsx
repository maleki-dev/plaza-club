import React from 'react';

import SearchBox from '../search-box/search-box.component';

import logo from '../../assets/images/logo.png';
import * as S from './header.styles';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderTop>
        <S.Logo to="/">
          <img alt="plaza-logo" src={logo} />
        </S.Logo>
        <SearchBox />
      </S.HeaderTop>
    </S.Header>
  );
};

export default Header;
