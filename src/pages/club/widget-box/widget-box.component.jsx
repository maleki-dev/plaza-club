import React from 'react';
import { Container, Header, Footer } from './widget-box.styles';
import Widget from '../../../components/widget/widget.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

const WidgetBox = () => {
  return (
    <Container>
      <Widget>
        <Header>ارتقا به سطح نقره ای</Header>
        فقط 22،560 امتیاز دیگه تا رسیدن به سطح نقره ای و کلی جوایز و تخفیف های ویژه
        <Footer>
          <CustomButton $color="primary" $size="small" to="/">
            افزایش سطح
          </CustomButton>
        </Footer>
      </Widget>
      <Widget>
        <Header>هم خرید بیشتر، تخفیف بیشتر!</Header>
        هر چقدر هم خریدات بیشتر باشن سریعتر ارتقا سطح پیدا میکنی
        <Footer>
          <CustomButton $color="secondary" $size="small" to="/">
            افزودن هم خرید جدید
          </CustomButton>
        </Footer>
      </Widget>
    </Container>
  );
};

export default WidgetBox;
