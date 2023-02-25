import React, {useEffect} from 'react';

import HeaderNavbar from '@/components/headers/Navbar';
import * as actionCategory from '@/redux/actions/actionCategory';
import {useSelector} from 'react-redux';
import {useActions} from '@/utils';

const LayoutMain = ({children}) => {
  const category = useSelector(state => state.category);
  const actions = useActions(actionCategory);

  const fetchData = async () => {
    await actions.fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeaderNavbar brandName="Shopping Cart" menus={category.data || []} />
      {children}
    </div>
  );
};

export default React.memo(LayoutMain);
