import React from 'react';
import * as S from './menu.styles';
import { ReactComponent as CrossIcon } from '../../../assets/images/svg/cross.svg';
import { ReactComponent as PowerOffIcon } from '../../../assets/images/svg/powerOff.svg';
import { ReactComponent as UserIcon } from '../../../assets/images/svg/user4x.svg';
import SlideDown from '../slide-down/slide-down.cmponent';
import { navData } from '../../../data';
import { Link } from 'react-router-dom';
import withUser from '../../../hoc/withUser.component';
import levelAssesment from '../../../utils/levelAssesment';
import { userLogout } from '../../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

const Menu = ({ $open, $onClose, currentUser }) => {
  const dispatch = useDispatch();
  const logout = () => dispatch(userLogout());

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
        {navData.map(({ id, items, title }) => (
          <S.NavItem key={id}>
            <SlideDown $title={title}>
              <S.BlueLink to="/"> {`همه‌ی ${title}`}</S.BlueLink>
              {items.map(({ items }) =>
                items.map((navItem, id) => (
                  <SlideDown key={id} $title={navItem.title} $deeper={true}>
                    <S.BlueLink to={navItem.url}>{`همه‌ی ${navItem.title}`}</S.BlueLink>
                    {navItem.items.map((subItem, id) => (
                      <Link key={id} to={subItem.url}>
                        {subItem.title}
                      </Link>
                    ))}
                  </SlideDown>
                )),
              )}
            </SlideDown>
          </S.NavItem>
        ))}
      </S.NavContainer>
    </S.Container>
  );
};

export default withUser(Menu);
