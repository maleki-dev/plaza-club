import React, { forwardRef } from 'react';

const ForwardRef = forwardRef(({ children, ...otherProps }, ref) => {
  return (
    <div {...otherProps} ref={ref}>
      {children}
    </div>
  );
});

export default ForwardRef;
