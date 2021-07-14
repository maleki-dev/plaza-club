import { ReactComponent as UserIcon } from '../../assets/images/svg/__user.svg';
import { ReactComponent as ClubIcon } from '../../assets/images/svg/__sign.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/svg/logout.svg';
import { ReactComponent as CartIcon } from '../../assets/images/svg/commerce-shopping-cart.svg';

export const userDropdownData = [
  {
    id: 1,
    title: 'پروفایل',
    icon: <UserIcon />,
    href: '/club',
  },
  {
    id: 2,
    title: 'باشگاه مشتریان',
    icon: <ClubIcon />,
    href: '/club',
  },
  {
    id: 3,
    title: 'سفارش های من',
    icon: <CartIcon />,
    href: '/club',
  },
  {
    id: 4,
    title: 'خروج از حساب',
    icon: <LogoutIcon />,
    href: '/',
    onclick: () => {},
  },
];
