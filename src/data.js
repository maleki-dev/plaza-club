import { ReactComponent as Chat } from './assets/images/svg/chat.svg';
import { ReactComponent as Hug } from './assets/images/svg/hug.svg';
import { ReactComponent as Shopping } from './assets/images/svg/shopping.svg';
import { ReactComponent as Testimonial } from './assets/images/svg/testimonial.svg';
import { ReactComponent as Review } from './assets/images/svg/review.svg';
import { ReactComponent as Profiles } from './assets/images/svg/profiles.svg';
import { ReactComponent as UserIcon } from './assets/images/svg/__user.svg';
import { ReactComponent as ChartIcon } from './assets/images/svg/__chart.svg';
import { ReactComponent as HistoryIcon } from './assets/images/svg/__history.svg';
import { ReactComponent as MenuIcon } from './assets/images/svg/__menu.svg';

export const levelsData = {
  green: {
    levelId: 'green',
    maxScore: 25000,
    color: 'success',
    levelName: 'سبز',
  },

  silver: {
    levelId: 'silver',
    maxScore: 50000,
    color: 'subtitle',
    levelName: 'نقره‌ای',
  },

  gold: {
    levelId: 'gold',
    maxScore: 400000,
    color: 'primary',
    levelName: 'طلایی',
  },

  diamond: {
    levelId: 'diamond',
    minScore: 400000,
    maxScore: 400000,
    color: 'secondary',
    levelName: 'الماس',
  },
};

export const userData = {
  name: 'سجاد ملکی',
  score: 40000,
};

export const scoringData = [
  {
    id: 1,
    title: 'تکمیل پروفایل',
    score: 1000,
    icon: <Profiles />,
  },
  {
    id: 2,
    title: 'خرید کالا',
    score: null,
    explan: 'امتیاز به نسبت قیمت کالا',
    icon: <Shopping />,
  },
  {
    id: 3,
    title: 'ثبت نظر',
    score: 50,
    icon: <Chat />,
  },
  {
    id: 4,
    title: 'دعوت دوستان',
    score: 500,
    icon: <Hug />,
  },
  {
    id: 5,
    title: 'نقد و بررسی کالا',
    score: 250,
    icon: <Review />,
  },
  {
    id: 6,
    title: 'لایک نظرات کاربران',
    score: 1,
    icon: <Testimonial />,
  },
];

export const productData = [
  // {
  //   id: 1,
  //   name: 'اسپیکر بلوتوث مشکی رنگ کیفیت عالی دارای امکانات خیلی زیاد',
  //   price: {
  //     old: 1800000,
  //     new: 1650000,
  //   },
  //   imageUrl: './images/products/__img1.png',
  //   href: '/',
  //   point: 160,
  // },
  {
    id: 2,
    name: 'دسته بازی پلی استیشن 4 قرمز رنگ',
    price: {
      old: 3000000,
      new: 2550000,
    },
    imageUrl: './images/products/__img2.png',
    href: '/',
    point: 250,
  },
  {
    id: 3,
    name: 'هدفون مشکی بی سیم به همراه کاپ های قرمز رنگ',
    price: {
      old: 2500000,
      new: 2150000,
    },
    imageUrl: './images/products/__img3.png',
    href: '/',
    point: 210,
  },
  {
    id: 4,
    name: 'موس گیمینگ زرد رنگ به امکانات حرفه ای برای گیمیر ها',
    price: {
      old: 2000000,
      new: 1250000,
    },
    imageUrl: './images/products/__img4.png',
    href: '/',
    point: 125,
  },
];

export const menuData = [
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
    href: '/club/history',
    title: 'تاریخچه امتیازات',
    icon: <HistoryIcon />,
  },
  {
    id: 4,
    href: '/club/teammates',
    title: 'مشاهده هم خرید ها',
    icon: <UserIcon />,
  },
];
