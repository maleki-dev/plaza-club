import React from 'react';
import * as S from './social-icons.styles';
import { ReactComponent as Aparat } from '../../assets/images/svg/aparat.svg';
import { ReactComponent as Facebook } from '../../assets/images/svg/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/images/svg/instagram.svg';
import { ReactComponent as Telegram } from '../../assets/images/svg/telegram.svg';
import { ReactComponent as Twitter } from '../../assets/images/svg/twitter.svg';

const SocialData = [
  {
    id: 1,
    component: <Aparat />,
    href: '/',
  },
  {
    id: 2,
    component: <Telegram />,
    href: '/',
  },
  {
    id: 3,
    component: <Facebook />,
    href: '/',
  },
  {
    id: 4,
    component: <Twitter />,
    href: '/',
  },
  {
    id: 5,
    component: <Instagram />,
    href: '/',
  },
];

const SocialIcons = () => {
  return (
    <S.SocialContainer>
      {SocialData.map(socialItem => (
        <S.SocialIcon key={socialItem.id} href={socialItem.href}>
          {socialItem.component}
        </S.SocialIcon>
      ))}
    </S.SocialContainer>
  );
};

export default SocialIcons;
