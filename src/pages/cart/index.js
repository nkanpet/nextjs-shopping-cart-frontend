import React from 'react';

import MainLayout from '@/containers/layouts/main';
import CartList from '@/containers/cart/list';
import {Spacer} from '@nextui-org/react';

const Cart = () => {
  return (
    <MainLayout>
      <Spacer />
      <CartList />
    </MainLayout>
  );
};

export default Cart;
