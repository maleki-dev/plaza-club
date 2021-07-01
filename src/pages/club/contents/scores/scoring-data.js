import { ReactComponent as Chat } from '../../../../assets/images/svg/chat.svg';
import { ReactComponent as Hug } from '../../../../assets/images/svg/hug.svg';
import { ReactComponent as Shopping } from '../../../../assets/images/svg/shopping.svg';
import { ReactComponent as Testimonial } from '../../../../assets/images/svg/testimonial.svg';
import { ReactComponent as Review } from '../../../../assets/images/svg/review.svg';
import { ReactComponent as Profiles } from '../../../../assets/images/svg/profiles.svg';

const scoringData = [
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

export default scoringData;
