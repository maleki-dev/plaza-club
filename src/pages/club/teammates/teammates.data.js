import AddTeammate from '../../../components/add-teammate/add-teammate.component';

export const teammates = [
  {
    id: 1,
    name: 'محسن جهانی',
    email: 'mohsen.jahani@gmail.com',
    mobile: '09112345678',
    timeIn: '‏1 فروردین 1399',
    status: 'confirmed',
  },
  {
    id: 2,
    name: 'احسان جلالی',
    email: 'ehsanjalali@yahoo.com',
    timeIn: '‏‏2 فروردین 1399',
    status: 'unConfirmed',
  },
  {
    id: 3,
    name: 'مژگان غلامی ',
    email: 'm.gholami70@live.com',
    timeIn: '‏10 فروردین 1399',
    status: 'pending',
  },
  //   {
  //     id: 4,
  //     name: 'محسن جهانی خدابنده لو',
  //     email: 'mohsen.jahani@gmail.com',
  //     mobile: '09112345678',
  //     timeIn: '‏1 فروردین 1399',
  //     status: 'confirmed',
  //   },
  //   {
  //     id: 5,
  //     name: 'احسان جلالی',
  //     email: 'ehsanjalali@yahoo.com',
  //     timeIn: '‏‏2 فروردین 1399',
  //     status: 'confirmed',
  //   },
  //   {
  //     id: 6,
  //     name: 'مژگان غلامی لیفشاگردی',
  //     email: 'm.gholami70@live.com',
  //     timeIn: '‏10 فروردین 1399',
  //     status: 'confirmed',
  //   },
];

export const tableHeadData = [
  {
    id: 1,
    span: 2,
    title: 'هم‌خرید',
  },
  {
    id: 2,
    span: 3,
    title: 'ایمیل/موبایل',
  },
  {
    id: 3,
    span: 2,
    title: 'تاریخ معرفی',
  },
  {
    id: 4,
    span: 3,
    title: 'وضعیت تایید',
  },
];

export const widgetBoxData = {
  direction: 'column',
  widgets: [
    {
      id: 1,
      header: 'هم خرید بیشتر، تخفیف بیشتر!',
      body: 'هر چقدر هم خریدات بیشتر باشن سریعتر ارتقا سطح پیدا میکنی',
      footer: {
        color: 'secondary',
        text: 'افزودن هم خرید جدید',
        modal: toggle => <AddTeammate action={e => e.preventDefault()} toggle={toggle} />,
      },
    },
  ],
};

export const sideInfo = [
  {
    id: 1,
    count: 2,
    total: 10,
    title: 'هم خرید ها',
    subtitle: 'تعداد هم خرید های قابل معرفی',
  },
  {
    id: 2,
    count: 0,
    total: 8,
    title: 'جایگزینی',
    subtitle: 'تعداد هم خرید های قابل جایگزینی',
  },
  {
    id: 3,
    count: 2,
    total: 18,
    title: 'معرفی شده',
    subtitle: 'تعداد هم خرید های معرفی شده',
  },
  {
    id: 4,
    count: 0,
    total: 18,
    title: 'جایگزین شده',
    subtitle: 'تعداد هم خرید های جایگزین شده',
  },
];
