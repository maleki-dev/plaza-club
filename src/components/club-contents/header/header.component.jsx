import React from 'react';
import * as S from './header.styles';
import NavItem from '../../nav-item/nav-item.component';
import { ReactComponent as ClubIcon } from '../../../assets/images/svg/__club.svg';

const clubHeaderNavData = [
  {
    id: 1,
    text: 'درباره باشگاه',
    href: '/club/about',
  },
  {
    id: 2,
    text: 'همکاران',
    href: '/club/coleages',
  },
  {
    id: 3,
    text: 'جوایز',
    href: '/club/gifts',
  },
  {
    id: 4,
    text: 'شرایط و قوانین باشگاه',
    href: '/club/rules',
  },
];

const ClubHeader = () => {
  return (
    <S.Container>
      <S.Logo>
        <NavItem to="/club" $font="mdBold" before={<ClubIcon />}>
          باشگاه مشتریان
        </NavItem>
      </S.Logo>
      {clubHeaderNavData.map(item => (
        <NavItem key={item.id} to={item.href}>
          {item.text}
        </NavItem>
      ))}
    </S.Container>
  );
};

export default ClubHeader;
