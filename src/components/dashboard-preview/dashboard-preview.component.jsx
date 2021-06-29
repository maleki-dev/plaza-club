import React from 'react';
import * as S from './dashboard-preview.styles';
import NavItem from '../nav-item/nav-item.component';
import Widget from '../widget/widget.component';
import DashboardHeader from './header/header.component';
import DashboardFooter from './footer/footer.component';

import menuData from './dashboard-menu-data';

const UserDashboard = () => {
  return (
    <S.Container>
      <Widget>
        <DashboardHeader />
        <S.Content>
          {menuData.map(menuItem => (
            <NavItem
              key={menuItem.id}
              to={menuItem.href}
              color={menuItem.fill}
              before={menuItem.icon}
            >
              {menuItem.title}
            </NavItem>
          ))}
        </S.Content>
        <DashboardFooter />
      </Widget>
    </S.Container>
  );
};

export default UserDashboard;
