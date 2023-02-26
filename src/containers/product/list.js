import React, {useEffect} from 'react';

import ProductListComponent from '@/components/products/List';
import {useSelector} from 'react-redux';
import {useActions} from '@/utils';
import * as _actionProduct from '@/redux/actions/actionProduct';
import * as _actionCart from '@/redux/actions/actionCart';

const ProductList = () => {
  const product = useSelector(state => state.product);
  const actionProduct = useActions(_actionProduct);
  const actionCart = useActions(_actionCart);

  const fetchData = async () => {
    await actionProduct.fetchData();
  };

  const handleAddToCart = async product => {
    const response = await actionCart.addItem({product_id: product.id, quantity: 1});
    if (response.status) {
    } else {
      alert(response.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <ProductListComponent data={product.data || []} onAddToCart={handleAddToCart} />;
};

export default React.memo(ProductList);
