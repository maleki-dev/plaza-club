import React from 'react';
import * as S from './menu.styles';
import { ReactComponent as CrossIcon } from '../../../assets/images/svg/cross.svg';
import { ReactComponent as PowerOffIcon } from '../../../assets/images/svg/powerOff.svg';
import { ReactComponent as UserIcon } from '../../../assets/images/svg/user4x.svg';
import SlideDown from '../slide-down/slide-down.cmponent';
import MiniNav from '../mini-nav/mini-nav.component';
import { navData } from '../../../data';
import { Link } from 'react-router-dom';
import withUser from '../../../hoc/withUser.component';
import levelAssesment from '../../../utils/levelAssesment';
import { userLogout } from '../../../redux/user/user.actions';
import { useDispatch } from 'react-redux';
import { v1 as makeId } from 'uuid';

const Menu = ({ $open, $onClose, currentUser }) => {
  const dispatch = useDispatch();
  const logout = () => dispatch(userLogout());

  const getItems = (item, parentId, deep) => {
    const key = makeId();
    return (
      <SlideDown
        $title={item.title}
        $deeper={true}
        $parentId={parentId}
        $childId={item.id}
        key={key}
        deep={deep}
      >
        <S.BlueLink to={item.url}>{`همه‌ی ${item.title}`}</S.BlueLink>
        {item.items.map(subItem => {
          return (
            <React.Fragment key={makeId()}>
              {subItem.items ? (
                <SlideDown
                  key={subItem.id}
                  $title={subItem.title}
                  $deeper={true}
                  $parentId={item.id}
                  $childId={subItem.id}
                  deep={++deep}
                >
                  {getItems(subItem.items, subItem.id, ++deep)}
                </SlideDown>
              ) : (
                <Link to={subItem.url}>{subItem.title}</Link>
              )}
            </React.Fragment>
          );
        })}
      </SlideDown>
    );
  };

  return (
    <S.Container $open={$open}>
      <S.ButtonsContainer>
        <PowerOffIcon onClick={logout} />
        <CrossIcon onClick={$onClose} />
      </S.ButtonsContainer>
      <S.DetailsContainer>
        {currentUser ? (
          <React.Fragment>
            <S.Name>{currentUser.displayName}</S.Name>
            <S.MobileNumber>0911759826</S.MobileNumber>
            <S.UserBigIcon $color={levelAssesment(currentUser.score).color}>
              <UserIcon />
            </S.UserBigIcon>
            <MiniNav />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <S.UserBigIcon $color="background">
              <UserIcon />
            </S.UserBigIcon>
            <p>
              قبلاً عضو شدی؟! همین حالا
              <S.BlueLink $font="mdNormal" to="/auth/sign-in">
                وارد شو
              </S.BlueLink>
            </p>
          </React.Fragment>
        )}
      </S.DetailsContainer>
      <S.NavContainer>
        {navData.map(({ id, items, title }) => {
          return (
            <S.NavItem key={id}>
              <SlideDown $title={title} $parentId={id} deep={0}>
                <S.BlueLink to="/"> {`همه‌ی ${title}`}</S.BlueLink>
                {items.map(item => (
                  <React.Fragment key={makeId()}>
                    {item.items.map(navItem => {
                      return (
                        <SlideDown
                          key={navItem.id}
                          $title={navItem.title}
                          $deeper={true}
                          $parentId={id}
                          $childId={navItem.id}
                          deep={1}
                        >
                          <S.BlueLink to={navItem.url}>{`همه‌ی ${navItem.title}`}</S.BlueLink>
                          {navItem.items.map(subItem => {
                            return (
                              <React.Fragment key={subItem.id}>
                                {subItem.items ? (
                                  getItems(subItem, navItem.id, 2)
                                ) : (
                                  <Link to={subItem.url}>{subItem.title}</Link>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </SlideDown>
                      );
                    })}
                  </React.Fragment>
                ))}
              </SlideDown>
            </S.NavItem>
          );
        })}
      </S.NavContainer>
    </S.Container>
  );
};

export default withUser(Menu);
