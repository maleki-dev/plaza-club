const actions = {
  profileCompletion: {
    value: 1000,
    type: 'inc',
    title: 'تکمیل پروفایل',
    bonus: null,
  },

  order: {
    value: price => price / 1000,
    type: 'inc',
    title: name => `خرید ${name}`,
    sub: 'خرید مستقیم',
    bonus: 0,
  },

  teammateOrder: {
    value: price => price / 1000 / 2,
    type: 'inc',
    title: name => `خرید ${name}`,
    sub: name => `هم‌خرید - ${name}`,
    bonus: 20,
  },

  invite: {
    value: 500,
    type: 'inc',
    title: 'دعوت دوستان',
    sub: email => email,
    bonus: null,
  },

  like: {
    value: 1,
    type: 'inc',
    title: 'لایک نظر',
    bonus: null,
  },

  comment: {
    value: 50,
    type: 'inc',
    title: 'ثبت نظر',
    bonus: null,
  },

  review: {
    value: 250,
    type: 'inc',
    title: 'نقد و بررسی کالای خریداری شده',
    bonus: null,
  },

  upgrade: {
    value: 25000,
    type: 'dec',
    title: 'ارتقا به سطح نقره‌ای',
    bonus: null,
  },

  upgradeCard: {
    value: 25000,
    type: 'inc',
    title: 'کارت ارتقا',
    bonus: null,
  },
};

const data = [
  {
    id: 1,
    ...actions.profileCompletion,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 2,
    ...actions.order,
    value: actions.order.value(450000),
    title: actions.order.title('ماوس گیمینگ'),
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 3,
    ...actions.invite,
    sub: actions.invite.sub('ahmad.n33@gmail.com'),
    status: {
      date: '21 خرداد 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 4,
    ...actions.like,
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'unConfirmed',
    },
  },
  {
    id: 5,
    ...actions.upgradeCard,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 6,
    ...actions.upgrade,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 7,
    ...actions.comment,
    details: { href: '/' },
    status: {
      date: '21 اردیبهشت 1400',
      condition: 'unConfirmed',
    },
  },
  {
    id: 8,
    ...actions.review,
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'pending',
    },
  },

  {
    id: 9,
    ...actions.invite,
    sub: actions.invite.sub('ahmad.n33@gmail.com'),
    status: {
      date: '21 خرداد 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 10,
    ...actions.review,
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'pending',
    },
  },
  {
    id: 11,
    ...actions.teammateOrder,
    value: actions.teammateOrder.value(450000),
    title: actions.teammateOrder.title('ماوس گیمینگ'),
    sub: actions.teammateOrder.sub('امیر خوشحال'),
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 12,
    ...actions.like,
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'unConfirmed',
    },
  },
  {
    id: 13,
    ...actions.upgradeCard,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 14,
    ...actions.teammateOrder,
    value: actions.teammateOrder.value(450000),
    title: actions.teammateOrder.title('ماوس گیمینگ'),
    sub: actions.teammateOrder.sub('امیر خوشحال'),
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 15,
    ...actions.profileCompletion,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 16,
    ...actions.order,
    value: actions.order.value(450000),
    title: actions.order.title('ماوس گیمینگ'),
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 17,
    ...actions.upgrade,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 18,
    ...actions.comment,
    details: { href: '/' },
    status: {
      date: '21 اردیبهشت 1400',
      condition: 'unConfirmed',
    },
  },

  {
    id: 19,
    ...actions.review,
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'pending',
    },
  },
  {
    id: 20,
    ...actions.teammateOrder,
    value: actions.teammateOrder.value(450000),
    title: actions.teammateOrder.title('ماوس گیمینگ'),
    sub: actions.teammateOrder.sub('امیر خوشحال'),
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 21,
    ...actions.profileCompletion,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 22,
    ...actions.order,
    value: actions.order.value(450000),
    title: actions.order.title('ماوس گیمینگ'),
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 23,
    ...actions.invite,
    sub: actions.invite.sub('ahmad.n33@gmail.com'),
    status: {
      date: '21 خرداد 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 24,
    ...actions.like,
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'unConfirmed',
    },
  },
  {
    id: 25,
    ...actions.upgradeCard,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 26,
    ...actions.upgrade,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 27,
    ...actions.comment,
    details: { href: '/' },
    status: {
      date: '21 اردیبهشت 1400',
      condition: 'unConfirmed',
    },
  },
  {
    id: 28,
    ...actions.review,
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'pending',
    },
  },
  {
    id: 29,
    ...actions.teammateOrder,
    value: actions.teammateOrder.value(450000),
    title: actions.teammateOrder.title('ماوس گیمینگ'),
    sub: actions.teammateOrder.sub('امیر خوشحال'),
    details: { href: '/' },
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
  {
    id: 30,
    ...actions.profileCompletion,
    status: {
      date: '21 فروردین 1400',
      condition: 'confirmed',
    },
  },
];
export default data;
