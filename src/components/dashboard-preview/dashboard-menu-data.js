import { ReactComponent as UserIcon } from '../../assets/images/svg/__user.svg';
import { ReactComponent as ChartIcon } from '../../assets/images/svg/__chart.svg';
import { ReactComponent as HistoryIcon } from '../../assets/images/svg/__history.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/svg/__menu.svg';

const menuData = [
  {
    id: 1,
    href: '/club',
    title: 'داشبورد',
    icon: <MenuIcon />,
  },
  {
    id: 2,
    href: '/club/scores',
    title: 'نمودار امتیازات',
    icon: <ChartIcon />,
  },
  {
    id: 3,
    href: '/',
    title: 'تاریخچه امتیازات',
    icon: <HistoryIcon />,
  },
  {
    id: 4,
    href: '/',
    title: 'مشاهده هم خرید ها',
    icon: <UserIcon />,
  },
];

export default menuData;
