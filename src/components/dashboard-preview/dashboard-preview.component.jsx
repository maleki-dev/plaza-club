import React from 'react';
import * as S from './dashboard-preview.styles';
import NavItem from '../nav-item/nav-item.component';
import Widget from '../widget/widget.component';
import DashboardHeader from './header/header.component';
import DashboardFooter from './footer/footer.component';
import { withRouter } from 'react-router-dom';

import { menuData } from '../../data';

const UserDashboard = ({ location }) => {
  const currentPath = location.pathname;
  return (
    <S.Container>
      <Widget>
        <DashboardHeader />
        <S.Content>
          {menuData.map(({ id, href, icon, title }) => (
            <NavItem
              key={id}
              to={href}
              color={currentPath === href ? 'primary' : 'onSurface'}
              before={icon}
            >
              {title}
            </NavItem>
          ))}
        </S.Content>
        <DashboardFooter />
      </Widget>
    </S.Container>
  );
};

export default withRouter(UserDashboard);
