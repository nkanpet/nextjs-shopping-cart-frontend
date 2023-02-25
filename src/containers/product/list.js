import React, {useEffect} from 'react';

import ProductListComponent from '@/components/products/List';
import {useSelector} from 'react-redux';
import {useActions} from '@/utils';
import * as actionProduct from '@/redux/actions/actionProduct';

const ProductList = () => {
  const state = useSelector(state => state.product);
  const actions = useActions(actionProduct);

  const fetchData = async () => {
    await actions.fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <ProductListComponent data={state.data || []} />;
};

export default React.memo(ProductList);
