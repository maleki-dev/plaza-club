import React from 'react';
import * as S from './search-content.styles';
import search from '../../utils/search';
import { navData } from '../../data';
import { ReactComponent as BackUp } from '../../assets/images/svg/backUp.svg';
import Alert from '../alert/alert.component';

const SearchContent = ({ input }) => {
  if (input) {
    const searchResult = search(navData, input);
    // console.log({ searchResult, input });
    if (searchResult.length) {
      return (
        <React.Fragment>
          <S.Top>
            {searchResult.slice(0, 4).map(({ parent, url, title }, index) => {
              if (parent) {
                return (
                  <S.SearchItem key={index} to={url}>
                    جست‌و‌جوی {title} در دسته‌ی
                    <S.SearchItemHighlight>{parent}</S.SearchItemHighlight>
                  </S.SearchItem>
                );
              } else {
                return (
                  <S.SearchItem key={index} to={url}>
                    همه‌ی کالاها در دسته‌ی
                    <S.SearchItemHighlight>{title}</S.SearchItemHighlight>
                  </S.SearchItem>
                );
              }
            })}
          </S.Top>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <S.Top>
            <S.NotFound>
              <Alert $type="error">کالایی با عبارت "{input}" پیدا نشد!</Alert>
            </S.NotFound>
            <S.SearchSuggest>
              <p>از نامهای متداول و مناسب برای جستجو استفاده کنید</p>
              <p>در صورت وجود اشتباه تایپی، عبارت را اصلاح کنید</p>
            </S.SearchSuggest>
          </S.Top>
        </React.Fragment>
      );
    }
  } else {
    return (
      <React.Fragment>
        <S.Top>
          <S.SearchItem notlink={true}>آخرین جست‌و‌جوهای شما</S.SearchItem>
          <S.SearchItem before={<BackUp />} to="/">
            hdmi
          </S.SearchItem>
          <S.SearchItem before={<BackUp />} to="/">
            پاور بانک انرجایزر
          </S.SearchItem>
          <S.SearchItem before={<BackUp />} to="/">
            گلس سامسونگ A50
          </S.SearchItem>
          <S.SearchItem before={<BackUp />} to="/">
            موس گیمینگ
          </S.SearchItem>
          <S.SearchItem before={<BackUp />} to="/">
            PS4
          </S.SearchItem>
        </S.Top>
        <S.Bottom>
          <S.SearchItem notlink={true}>بیشترین جست‌و‌جوهای سایت</S.SearchItem>
          <S.SearchInfo>
            <S.MostSearchedItem to="/">سامسونگ</S.MostSearchedItem>
            <S.MostSearchedItem to="/">aux</S.MostSearchedItem>
            <S.MostSearchedItem to="/">شارژر دیواری</S.MostSearchedItem>
            <S.MostSearchedItem to="/">باتری</S.MostSearchedItem>
            <S.MostSearchedItem to="/">A50</S.MostSearchedItem>
          </S.SearchInfo>
        </S.Bottom>
      </React.Fragment>
    );
  }
};

export default SearchContent;
