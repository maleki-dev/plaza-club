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
    title: 'کالای دیجیتال',
    items: [
      {
        id: 11,
        items: [
          {
            id: 111,
            title: 'لوازم جانبی موبایل و تبلت',
            url: '/search/category-accessories',
            items: [
              {
                id: 1111,
                title: 'پاور بانک',
                url: '/search/category-power-bank',
                items: [
                  {
                    id: 11111,
                    title: 'پاور بانک',
                    url: '/search/category-power-bank',
                  },
                  {
                    id: 11112,
                    title: 'کیف و کاور',
                    url: '/search/category-cover',
                  },
                  {
                    id: 11113,
                    title: 'کابل و مبدل',
                    url: '/search/category-cover',
                  },
                ],
              },
              {
                id: 1112,
                title: 'کیف و کاور',
                url: '/search/category-cover',
                items: [
                  {
                    id: 11111,
                    title: 'پاور بانک',
                    url: '/search/category-power-bank',
                  },
                  {
                    id: 11112,
                    title: 'کیف و کاور',
                    url: '/search/category-cover',
                  },
                  {
                    id: 11113,
                    title: 'کابل و مبدل',
                    url: '/search/category-cover',
                  },
                ],
              },
              {
                id: 1113,
                title: 'کابل و مبدل',
                url: '/search/category-cover',
              },
              {
                id: 1114,
                title: 'شارژر',
                url: '/search/category-cover',
              },
              {
                id: 1115,
                title: 'محافظ صفحه نمایش',
                url: '/search/category-cover',
              },
              {
                id: 1116,
                title: 'نگهدارنده موبایل',
                url: '/search/category-cover',
              },
              {
                id: 1117,
                title: 'باتری',
                url: '/search/category-cover',
              },
              {
                id: 1118,
                title: 'هندزفری',
                url: '/search/category-cover',
              },
              {
                id: 1119,
                title: 'قاب و شاسی موبایل',
                url: '/search/category-cover',
              },
            ],
          },
        ],
      },
      {
        id: 12,
        items: [
          {
            id: 121,
            title: 'لوازم جانبی کامپیوتر و لپ تاپ',
            url: '/',
            items: [
              {
                id: 1211,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 1212,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 1213,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 1214,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 1215,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 1216,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 1217,
                title: 'پایه خنک کننده لپ تاپ',
                url: '/',
              },
            ],
          },
        ],
      },
      {
        id: 13,
        items: [
          {
            id: 131,
            title: 'صوتی و تصویری و لوازم جانبی',
            url: '/',
            items: [
              {
                id: 1311,
                title: 'هدفون و هدست',
                url: '/',
              },
              {
                id: 1312,
                title: 'هندزفری',
                url: '/',
              },
              {
                id: 1313,
                title: 'اسپیکر',
                url: '/',
              },
              {
                id: 1314,
                title: 'کابل و مبدل صوتی  و تصویری',
                url: '/',
              },
              {
                id: 1315,
                title: 'محافظ برق چند راهی',
                url: '/',
              },
            ],
          },
        ],
      },
      {
        id: 14,
        items: [
          {
            id: 141,
            title: 'ذخیره سازی اطلاعات',
            url: '/search/category-accessories',
            items: [
              {
                id: 1411,
                title: 'فلش مموری',
                url: '/search/category-power-bank',
              },
              {
                id: 1412,
                title: 'کیف و کاورهارد دیسک اکسترنال',
                url: '/search/category-cover',
              },
              {
                id: 1413,
                title: 'کارت حافظه',
                url: '/search/category-cover',
              },
              {
                id: 1414,
                title: 'کارت خوان',
                url: '/search/category-cover',
              },
            ],
          },
          {
            id: 142,
            title: 'بازی و سرگرمی و لوازم جانبی',
            url: '/search/category-accessories',
            items: [
              {
                id: 1421,
                title: 'دسته بازی',
                url: '/search/category-power-bank',
              },
              {
                id: 1422,
                title: 'ماوس گیمینگ',
                url: '/search/category-cover',
              },
              {
                id: 1423,
                title: 'کنسول بازی',
                url: '/search/category-cover',
              },
              {
                id: 1424,
                title: 'هدست گیمینگ',
                url: '/search/category-cover',
              },
            ],
          },
        ],
      },
      {
        id: 15,
        items: [
          {
            id: 151,
            title: 'گجت دیجیتال',
            url: '/',
            items: [
              {
                id: 1511,
                title: 'هدست واقعیت مجازی',
                url: '/',
              },
              {
                id: 1512,
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
        id: 21,
        items: [
          {
            id: 211,
            title: 'لوازم و تجهیزات',
            url: '/',
            items: [
              {
                id: 2111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 2112,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 2113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 2114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 2115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 2116,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 2117,
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
        id: 31,
        items: [
          {
            id: 311,
            title: 'هنر، فیلم و موسیقی',
            url: '/',
            items: [
              {
                id: 3111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 3112,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 3113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 3114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 3115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 3116,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 3117,
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
        id: 41,
        items: [
          {
            id: 411,
            title: 'وسایل نقلیه',
            url: '/',
            items: [
              {
                id: 4111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 4112,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 4113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 4114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 4115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 4116,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 4117,
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
        id: 61,
        items: [
          {
            id: 611,
            title: 'کودک و نوزاد',
            url: '/',
            items: [
              {
                id: 6111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 6112,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 6113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 6114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 6115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 6116,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 6117,
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
        id: 71,
        items: [
          {
            id: 711,
            title: 'آرایشی و بهداشتی',
            url: '/',
            items: [
              {
                id: 7111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 7112,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 7113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 7114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 7115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 7116,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 7117,
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
        id: 81,
        items: [
          {
            id: 811,
            title: 'کتاب و نرم افزار',
            url: '/',
            items: [
              {
                id: 8111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 8112,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 8113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 8114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 8115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 8116,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 8117,
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
        id: 91,
        items: [
          {
            id: 911,
            title: 'مد و پوشاک',
            url: '/',
            items: [
              {
                id: 9111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 9112,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 9113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 9114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 9115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 9116,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 9117,
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
    id: '10',
    title: 'خانه و آشپزخانه',
    items: [
      {
        id: '101',
        items: [
          {
            id: '1011',
            title: 'خانه و آشپزخانه',
            url: '/',
            items: [
              {
                id: 10111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 10112,
                title: 'موس',
                url: 'کابل و مبدل کامپیوتر',
              },
              {
                id: 10113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 10114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 10115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 10116,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 10117,
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
    id: '11',
    title: 'بازی و سرگرمی',
    items: [
      {
        id: '111',
        items: [
          {
            id: '1111',
            title: 'بازی و سرگرمی',
            url: '/',
            items: [
              {
                id: 11111,
                title: 'کیبورد',
                url: '/',
              },
              {
                id: 11112,
                title: 'موس',
                url: '/',
              },
              {
                id: 11113,
                title: 'کابل و مبدل کامپیوتر',
                url: '/',
              },
              {
                id: 11114,
                title: 'هاب USB',
                url: '/',
              },
              {
                id: 11115,
                title: 'اسپیکر رومیزی',
                url: '/',
              },
              {
                id: 11117,
                title: 'ماوس پد',
                url: '/',
              },
              {
                id: 11118,
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
