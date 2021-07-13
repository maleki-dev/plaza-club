import React, { useState } from 'react';
import * as S from './navbar.styles';
import { navData } from '../../data';
import Wrapper from '../wrapper/wrapper.component';
import NavItem from '../nav-item/nav-item.component';
import Arrow from '../arrow/arrow.component';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleMouseOver = index => {
    setActiveTab(index);
  };

  return (
    <S.Container>
      <Wrapper>
        <S.Top>
          {navData.map(({ id, title, ...otherProps }, index) => {
            return (
              <S.TopItem
                key={id}
                {...otherProps}
                $active={activeTab === index}
                onMouseOver={() => handleMouseOver(index)}
              >
                {title}
              </S.TopItem>
            );
          })}
        </S.Top>
        <S.Bottom>
          {navData[activeTab].items.map((item, index) => (
            <S.NavColumn key={index}>
              {item.items.map((navGroupe, index) => (
                <React.Fragment key={index}>
                  <S.Title>
                    <NavItem
                      $font="mdBold"
                      $hoverBlue={true}
                      after={<Arrow direction="left" fill="unselected" />}
                      to={navGroupe.url}
                    >
                      {navGroupe.title}
                    </NavItem>
                  </S.Title>
                  {navGroupe.items.map((nav, index) => (
                    <S.Item key={index}>
                      <NavItem
                        $font="smNormal"
                        $hoverBlue={true}
                        to={nav.url}
                        before={<Arrow direction="left" fill="unselected" />}
                      >
                        {nav.title}
                      </NavItem>
                    </S.Item>
                  ))}
                </React.Fragment>
              ))}
            </S.NavColumn>
          ))}
        </S.Bottom>
      </Wrapper>
    </S.Container>
  );
};

export default Navbar;
