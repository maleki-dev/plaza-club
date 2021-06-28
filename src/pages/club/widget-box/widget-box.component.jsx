import React from 'react';
import { Container } from './widget-box.styles';
import Widget from '../../../components/widget/widget.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

const WidgetBox = () => {
  return (
    <Container>
      <Widget
        $header="ارتقا به سطح نقره ای"
        $footerLeft={true}
        $footer={
          <CustomButton color="primary" size="small" to="/">
            افزایش سطح
          </CustomButton>
        }
      >
        فقط 22،560 امتیاز دیگه تا رسیدن به سطح نقره ای و کلی جوایز و تخفیف های ویژه
      </Widget>
      <Widget
        $header="هم خرید بیشتر، تخفیف بیشتر!"
        $footerLeft={true}
        $footer={
          <CustomButton color="secondary" size="small" to="/">
            افزودن هم خرید جدید
          </CustomButton>
        }
      >
        هر چقدر هم خریدات بیشتر باشن سریعتر ارتقا سطح پیدا میکنی
      </Widget>
    </Container>
  );
};

export default WidgetBox;
