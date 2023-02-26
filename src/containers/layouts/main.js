import React, {useEffect} from 'react';

import HeaderNavbar from '@/components/headers/Navbar';
import * as actionCategory from '@/redux/actions/actionCategory';
import {logout} from '@/redux/actions/actionAuth';
import {useSelector} from 'react-redux';
import {useActions} from '@/utils';
import {useRouter} from 'next/router';

const LayoutMain = ({children}) => {
  const category = useSelector(state => state.category);
  const actions = useActions({...actionCategory, logout});
  const auth = useSelector(state => state.auth);
  const router = useRouter();
  const cart = useSelector(state => state.cart);

  const fetchData = async () => {
    await actions.fetchData();
  };

  const handleLogout = async () => {
    const response = await actions.logout();
    if (response.status) {
      router.replace('/');
    } else {
      alert(response.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeaderNavbar
        brandName="Shopping Cart"
        menus={category.data || []}
        username={auth.username}
        basket={cart.data?.cart_products?.length || 0}
        onLogout={handleLogout}
      />
      {children}
    </div>
  );
};

export default React.memo(LayoutMain);
