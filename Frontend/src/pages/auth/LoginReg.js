import { useState } from 'react';
import UserLogin from './UserLogin';

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return <>
    <UserLogin />
  </>;
};

export default LoginReg;
