import React from 'react';
import * as S from './menu.styles';
import { ReactComponent as CrossIcon } from '../../../assets/images/svg/cross.svg';
import { ReactComponent as PowerOffIcon } from '../../../assets/images/svg/powerOff.svg';
import { ReactComponent as UserIcon } from '../../../assets/images/svg/user4x.svg';
import SlideDown from '../slide-down/slide-down.cmponent';
import { navData } from '../../../data';

const Menu = () => {
  return (
    <S.Container>
      <S.ButtonsContainer>
        <PowerOffIcon />
        <CrossIcon />
      </S.ButtonsContainer>
      <S.DetailsContainer>
        <S.Name>علی لیائی</S.Name>
        <S.MobileNumber>0911759826</S.MobileNumber>
        <S.UserBigIcon>
          <UserIcon />
        </S.UserBigIcon>
      </S.DetailsContainer>
      <S.NavContainer>
        {navData.map(({ id, items, title }) => (
          <S.NavItem key={id}>
            <SlideDown $title={title}>
              {items.map(({ items }, index) => {
                return items.map(item => <SlideDown key={index} $title={item.title}></SlideDown>);
              })}
            </SlideDown>
          </S.NavItem>
        ))}
      </S.NavContainer>
    </S.Container>
  );
};

export default Menu;
