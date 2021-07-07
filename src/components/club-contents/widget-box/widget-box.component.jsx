import React from 'react';
import { Container, Header, Footer } from './widget-box.styles';
import Widget from '../../widget/widget.component';
import CustomButton from '../../custom-button/custom-button.component';
import useModal from '../../../helpers/useModal.hook';
import Modal from '../../modal/modal.component';

const WidgetBox = ({ data }) => {
  const [isShowing, toggle] = useModal();

  return (
    <Container $dir={data.direction}>
      {data.widgets.map(({ id, header, body, footer }) => (
        <Widget key={id}>
          <Header>{header}</Header>
          {body}
          <Footer>
            <CustomButton
              $color={footer.color}
              $size="small"
              to="/"
              onClick={footer.modal ? toggle : null}
            >
              {footer.text}
            </CustomButton>
          </Footer>
          {footer.modal ? <Modal isShowing={isShowing}>{footer.modal(toggle)}</Modal> : null}
        </Widget>
      ))}
    </Container>
  );
};

export default WidgetBox;
