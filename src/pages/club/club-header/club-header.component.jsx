import React from 'react';
import * as S from './club-header.styles';
import NavItem from '../../../components/nav-item/nav-item.component';
import { ReactComponent as ClubIcon } from '../../../assets/images/svg/__club.svg';

const clubHeaderNavData = [
  {
    id: 1,
    text: 'درباره باشگاه',
    href: '/',
  },
  {
    id: 2,
    text: 'همکاران',
    href: '/',
  },
  {
    id: 3,
    text: 'جوایز',
    href: '/',
  },
  {
    id: 4,
    text: 'شرایط و قوانین باشگاه',
    href: '/',
  },
];

const ClubHeader = () => {
  return (
    <S.Container>
      <S.Logo>
        <NavItem to="/" $larg={true} before={<ClubIcon />}>
          باشگاه مشتریان
        </NavItem>
      </S.Logo>
      {clubHeaderNavData.map(item => (
        <NavItem key={item.id} to={item.href}>
          {item.text}
        </NavItem>
      ))}
      <NavItem to="/">درباره باشگاه</NavItem>
    </S.Container>
  );
};

export default ClubHeader;
