import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, ModalBox } from './modal.styles.jsx';

const modalRoot = document.getElementById('modal-root');
// const scrollBarWidth = String(window.innerWidth - document.documentElement.clientWidth);
const Modal = ({ isShowing, children }) => {
  useEffect(() => {
    const scrollBarWidth = String(window.innerWidth - document.documentElement.clientWidth);
    document.body.style.overflow = isShowing ? 'hidden' : 'auto';
    document.body.style.paddingRight = isShowing ? scrollBarWidth + 'px' : '0';
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, [isShowing]);
  return isShowing
    ? createPortal(
        <ModalWrapper className="modal-wrapper">
          <ModalBox className="modal">{children}</ModalBox>
        </ModalWrapper>,
        modalRoot,
      )
    : null;
};

export default Modal;

// <div className="modal-header">
// <button
//   type="button"
//   className="modal-close-button"
//   data-dismiss="modal"
//   aria-label="Close"
//   onClick={hide}
// >
//   <span aria-hidden="true">&times;</span>
// </button>
// </div>
// <p>Hello, I'm a modal.</p>
