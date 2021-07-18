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
    details: ['مشکی قرمز', ' گارانتی تعویض یک ماهه'],
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
    details: ['گارانتی تعویض یک ماهه'],
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
    details: ['مشکی قرمز'],
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

export const navData = [
  {
    id: 1,
    // $active: true,
    title: 'کالای دیجیتال',
    items: [
      {
        items: [
          {
            title: 'لوازم جانبی موبایل و تبلت',
            url: '/search/category-accessories',
            items: [
              {
                title: 'پاور بانک',
                url: '/search/category-power-bank',
              },
              {
                title: 'کیف و کاور',
                url: '/search/category-cover',
              },
              {
                title: 'کابل و مبدل',
                url: '/search/category-cover',
              },
              {
                title: 'شارژر',
                url: '/search/category-cover',
              },
              {
                title: 'محافظ صفحه نمایش',
                url: '/search/category-cover',
              },
              {
                title: 'نگهدارنده موبایل',
                url: '/search/category-cover',
              },
              {
                title: 'باتری',
                url: '/search/category-cover',
              },
              {
                title: 'هندزفری',
                url: '/search/category-cover',
              },
              {
                title: 'قاب و شاسی موبایل',
                url: '/search/category-cover',
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            title: 'لوازم جانبی کامپیوتر و لپ تاپ',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            title: 'صوتی و تصویری و لوازم جانبی',
            url: '/',
            items: [
              {
                title: 'هدفون و هدست',
                url: '/',
              },
              {
                title: 'هندزفری',
                url: '/',
              },
              {
                title: 'اسپیکر',
                url: '/',
              },
              {
                title: 'کابل و مبدل صوتی  و تصویری',
                url: '/',
              },
              {
                title: 'محافظ برق چند راهی',
                url: '/',
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            title: 'ذخیره سازی اطلاعات',
            url: '/search/category-accessories',
            items: [
              {
                title: 'فلش مموری',
                url: '/search/category-power-bank',
              },
              {
                title: 'کیف و کاورهارد دیسک اکسترنال',
                url: '/search/category-cover',
              },
              {
                title: 'کارت حافظه',
                url: '/search/category-cover',
              },
              {
                title: 'کارت خوان',
                url: '/search/category-cover',
              },
            ],
          },
          {
            title: 'بازی و سرگرمی و لوازم جانبی',
            url: '/search/category-accessories',
            items: [
              {
                title: 'دسته بازی',
                url: '/search/category-power-bank',
              },
              {
                title: 'ماوس گیمینگ',
                url: '/search/category-cover',
              },
              {
                title: 'کنسول بازی',
                url: '/search/category-cover',
              },
              {
                title: 'هدست گیمینگ',
                url: '/search/category-cover',
              },
            ],
          },
        ],
      },
      {
        items: [
          {
            title: 'گجت دیجیتال',
            url: '/',
            items: [
              {
                title: 'هدست واقعیت مجازی',
                url: '/',
              },
              {
                title: 'مچ بند هوشمند',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'لوازم و تجهیزات',
    items: [
      {
        items: [
          {
            title: 'لوازم و تجهیزات',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'هنر، فیلم و موسیقی',
    items: [
      {
        items: [
          {
            title: 'هنر، فیلم و موسیقی',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'وسایل نقلیه',
    items: [
      {
        items: [
          {
            title: 'وسایل نقلیه',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'کودک و نوزاد',
    items: [
      {
        items: [
          {
            title: 'کودک و نوزاد',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'آرایشی و بهداشتی',
    items: [
      {
        items: [
          {
            title: 'آرایشی و بهداشتی',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'کتاب و نرم افزار',
    items: [
      {
        items: [
          {
            title: 'کتاب و نرم افزار',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'مد و پوشاک',
    items: [
      {
        items: [
          {
            title: 'مد و پوشاک',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: 'خانه و آشپزخانه',
    items: [
      {
        items: [
          {
            title: 'خانه و آشپزخانه',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: 'بازی و سرگرمی',
    items: [
      {
        items: [
          {
            title: 'بازی و سرگرمی',
            url: '/',
            items: [
              {
                title: 'کیبورد',
                url: '/',
              },
              {
                title: 'موس',
                url: '/',
              },
              {
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                title: 'هاب USB',
                url: '/',
              },
              {
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                title: 'ماوس پد',
                url: '/',
              },
              {
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
    ],
  },
];
