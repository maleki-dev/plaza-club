import React from 'react';
import * as S from './user-dropdown.styles';
import withUser from '../../hoc/withUser.component';
import levelAssesment from '../../utils/levelAssesment';
import { ReactComponent as UserIcon } from '../../assets/images/svg/__user2x.svg';
import NavItem from '../nav-item/nav-item.component';
import { userDropdownData } from './user-dropdown.data';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/user/user.actions';

const UserDropdown = ({ currentUser }) => {
  const level = levelAssesment(currentUser.score);
  const { displayName, score } = currentUser;
  const { color } = level;
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(userLogout());
  };

  return (
    <React.Fragment>
      <S.Header $userColor={color}>
        <S.HeaderIcon $userColor={color}>
          <UserIcon />
        </S.HeaderIcon>
        <S.HeaderInfo>
          <S.HeaderInfoName>{displayName}</S.HeaderInfoName>
          <S.HeaderInfoScore>{`امتیاز: ${score.toLocaleString()}`}</S.HeaderInfoScore>
        </S.HeaderInfo>
      </S.Header>
      <S.Body>
        {userDropdownData.map(item => {
          const { id, icon, href, title } = item;
          return (
            <NavItem
              key={id}
              before={icon}
              $gap="16"
              to={href}
              onClick={item.onclick ? onClickHandler : null}
            >
              {title}
            </NavItem>
          );
        })}
      </S.Body>
    </React.Fragment>
  );
};

export default withUser(UserDropdown);
