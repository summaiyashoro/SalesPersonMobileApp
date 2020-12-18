import React from 'react';
import AppButton from './AppButton';
import { useFormikContext } from 'formik';

function LoginButton({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} {...otherProps} onPress={handleSubmit} />
  );
}

export default LoginButton;