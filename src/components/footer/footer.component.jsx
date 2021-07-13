import React, { Fragment } from 'react';
import { footerData } from './footer-data';
import { Link } from 'react-router-dom';

import * as S from './footer.styles';
import NavItem from '../nav-item/nav-item.component';
import SocialIcons from '../social-icons/social-icons.component';
import Wrapper from '../wrapper/wrapper.component';
import HoverSliding from '../hover-sliding/hover-sliding.component';

const Footer = () => {
  const { details, topNav, middleNav, enamadData, storeData, copyrightInfo } = footerData;
  const { title: appTitle, text: aboutUsText } = details;

  return (
    <S.FooterContainer>
      <Wrapper>
        <S.FooterTop>
          {topNav.map(item => (
            <NavItem to={item.href} key={item.id}>
              {item.text}
            </NavItem>
          ))}
        </S.FooterTop>
        <S.FooterContent>
          {middleNav.map(footerNav => (
            <S.FooterNav key={footerNav.id}>
              <S.FooterNavTitle>{footerNav.title}</S.FooterNavTitle>
              <S.FooterNavWrapper>
                {footerNav.items.map(item => {
                  const props = {
                    notlink: item.href ? null : true,
                    to: item.href || null,
                  };
                  return (
                    <Fragment key={item.id}>
                      {item.hovereffect ? (
                        <HoverSliding>
                          <NavItem {...props}>{item.text}</NavItem>
                        </HoverSliding>
                      ) : (
                        <NavItem {...props}>{item.text}</NavItem>
                      )}
                    </Fragment>
                  );
                })}
              </S.FooterNavWrapper>
            </S.FooterNav>
          ))}
        </S.FooterContent>
        <S.FooterContent $high={true}>
          {enamadData.map(enamad => (
            <S.FooterEnamad key={enamad.id}>
              <S.FooterEnamadLink href={enamad.href}>
                <img src={enamad.imageUrl} alt={enamad.alt} />
              </S.FooterEnamadLink>
            </S.FooterEnamad>
          ))}
          <S.FooterDetails>
            <Link to={appTitle.href}>
              <img src={appTitle.imageUrl} alt={appTitle.alt} />
            </Link>
            <S.FooterAboutUs>{aboutUsText}</S.FooterAboutUs>
          </S.FooterDetails>
        </S.FooterContent>
        <S.FooterContent>
          <S.FooterStoreContainer>
            {storeData.map(item => (
              <S.FooterStoreItem key={item.id} href={item.href}>
                <img src={item.imageUrl} alt={item.id} />
              </S.FooterStoreItem>
            ))}
          </S.FooterStoreContainer>
        </S.FooterContent>
        <S.FooterContent>
          <SocialIcons />
        </S.FooterContent>
        <S.FooterContent>
          <S.CopyrightContainer>
            <p>{copyrightInfo.text}</p>
            <S.CopyrightPale>
              <span>Copyright © </span>
              <span>
                {copyrightInfo.dateStart.getFullYear()} -{' '}
                {copyrightInfo.dateEnd.getFullYear() + ' '}
              </span>
              <Link to={copyrightInfo.href}>{copyrightInfo.link}</Link>
              <span> - All rights reserved</span>
            </S.CopyrightPale>
          </S.CopyrightContainer>
        </S.FooterContent>
      </Wrapper>
    </S.FooterContainer>
  );
};

export default Footer;
