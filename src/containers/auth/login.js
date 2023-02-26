import React from 'react';

import LoginForm from '@/components/forms/LoginForm';
import {useActions} from '@/utils';
import {login} from '@/redux/actions/actionAuth';
import {useRouter} from 'next/router';

const AuthLogin = () => {
  const actions = useActions({login});
  const router = useRouter();

  const handleSubmit = async form => {
    const response = await actions.login(form.username, form.password);
    if (response.status) {
      router.replace('/');
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default AuthLogin;
