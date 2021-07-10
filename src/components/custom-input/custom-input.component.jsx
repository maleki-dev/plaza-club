import React, { forwardRef, useState } from 'react';
import { Container, Input, ShowPassword } from './custom-input.styles';

const PasswordInput = forwardRef(({ $placeholder }, ref) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <Container>
      <Input type={showPass ? 'text' : 'password'} ref={ref} placeholder={$placeholder} />
      <ShowPassword onClick={() => setShowPass(!showPass)} />
    </Container>
  );
});

const CustomInput = forwardRef((props, ref) => {
  if (props.$type === 'password') {
    return <PasswordInput {...props} ref={ref} />;
  }
  return (
    <Container>
      <Input type={props.$type || 'text'} ref={ref} placeholder={props.$placeholder} />
    </Container>
  );
});

export default CustomInput;
