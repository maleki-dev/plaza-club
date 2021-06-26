import { ReactComponent as UserIcon } from '../../assets/images/svg/__user.svg';
import { ReactComponent as ChartIcon } from '../../assets/images/svg/__chart.svg';
import { ReactComponent as HistoryIcon } from '../../assets/images/svg/__history.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/svg/__menu.svg';

const menuData = [
  {
    id: 1,
    href: '/',
    title: 'داشبورد',
    icon: <MenuIcon />,
    fill: 'primary',
  },
  {
    id: 2,
    href: '/',
    title: 'نمودار امتیازات',
    icon: <ChartIcon />,
    fill: 'onSurface',
  },
  {
    id: 3,
    href: '/',
    title: 'تاریخچه امتیازات',
    icon: <HistoryIcon />,
    fill: 'onSurface',
  },
  {
    id: 4,
    href: '/',
    title: 'مشاهده هم خرید ها',
    icon: <UserIcon />,
    fill: 'onSurface',
  },
];

export default menuData;
