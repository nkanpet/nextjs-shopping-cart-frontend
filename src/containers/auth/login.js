import React from 'react';

import LoginForm from '@/components/forms/LoginForm';
import {useActions} from '@/utils';
import {login} from '@/redux/actions/actionAuth';

const AuthLogin = () => {
  const actions = useActions({login});

  const handleSubmit = async form => {
    const response = await actions.login(form.username, form.password);
    console.log(response);
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default AuthLogin;
