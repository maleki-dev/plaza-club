import AddTeammate from '../../../components/add-teammate/add-teammate.component';

export const widgetBoxData = {
  direction: 'column',
  widgets: [
    {
      id: 1,
      header: 'ارتقا به سطح نقره ای',
      body: 'فقط 22،560 امتیاز دیگه تا رسیدن به سطح نقره ای و کلی تخفیف ویژه',
      footer: {
        color: 'primary',
        text: 'افزایش سطح',
      },
    },
    {
      id: 2,
      header: 'هم خرید بیشتر، تخفیف بیشتر!',
      body: 'هر چقدر هم خریدات بیشتر باشن سریعتر ارتقا سطح پیدا میکنی',
      footer: {
        color: 'secondary',
        text: 'افزودن هم خرید جدید',
        modal: toggle => <AddTeammate toggle={toggle} />,
      },
    },
  ],
};
