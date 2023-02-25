import React from 'react';

import MainLayout from '@/containers/layouts/main';
import AuthLoginContainer from '@/containers/auth/login';

const AuthLogin = () => {
  return (
    <MainLayout>
      <AuthLoginContainer />
    </MainLayout>
  );
};

export default AuthLogin;
