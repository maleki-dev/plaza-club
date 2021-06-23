import React from 'react';
import * as S from './footer.styles';
import NavItem from '../nav-item/nav-item.component';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterTop>
        <NavItem to="/">تماس با ما</NavItem>
        <NavItem to="/">درباره ما</NavItem>
      </S.FooterTop>
      <S.FooterContent>
        <S.FooterNav>
          <S.FooterNavTitle>راهنمای خرید</S.FooterNavTitle>
          <S.FooterNavWrapper>
            <NavItem hovereffect="true" to="/">
              سوالات متداول
            </NavItem>
            <NavItem hovereffect="true" to="/">
              شیوه خرید و ثبت سفارش
            </NavItem>
            <NavItem to="/">شیوه های پرداخت</NavItem>
            <NavItem to="/">شرایط استفاده از پلازا بن</NavItem>
            <NavItem to="/">حریم خصوصی و قوانین استفاده</NavItem>
          </S.FooterNavWrapper>
        </S.FooterNav>
        <S.FooterNav>
          <S.FooterNavTitle>مشتریان</S.FooterNavTitle>
          <S.FooterNavWrapper>
            <NavItem to="/">باشگاه مشتریان پلازا</NavItem>
            <NavItem to="/">شرایط ارسال و تحویل کالا</NavItem>
            <NavItem to="/">خدمات گارانتی و تحویل کالا</NavItem>
            <NavItem to="/">پیگیری سفارشات</NavItem>
          </S.FooterNavWrapper>
        </S.FooterNav>
        <S.FooterNav>
          <S.FooterNavTitle>همکاری با پلازا</S.FooterNavTitle>
          <S.FooterNavWrapper>
            <NavItem to="/">پنل فروشندگان پلازا</NavItem>
            <NavItem to="/">همکاری با سازمان ها</NavItem>
            <NavItem to="/">فرصت های شغلی</NavItem>
          </S.FooterNavWrapper>
        </S.FooterNav>
        <S.FooterNav>
          <S.FooterNavTitle>پشتیبانی پلازا همیشه آماده پاسخگویی به شماست</S.FooterNavTitle>
          <S.FooterNavWrapper>
            <NavItem notLink={true}>021 - 66711204</NavItem>
            <NavItem notLink={true}>info@plaza.ir</NavItem>
            <NavItem notLink={true}>تهران، خیابان جمهوری، خیابان حافظ، خیابان هاتف، پلاک 8</NavItem>
          </S.FooterNavWrapper>
        </S.FooterNav>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
