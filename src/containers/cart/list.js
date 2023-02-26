import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import CartItem from '@/components/cart/Item';
import {useActions} from '@/utils';
import * as _actionCart from '@/redux/actions/actionCart';
import {Spacer} from '@nextui-org/react';

const CartList = () => {
  const cart = useSelector(state => state.cart);
  const actionCart = useActions(_actionCart);

  const fetchData = () => {
    actionCart.fetchData();
  };

  const handleDecreaseQuantity = item => {
    const form = {
      quantity: item.quantity - 1,
    };

    updateItem(item.id, form);
  };

  const handleIncreaseQuantity = item => {
    const form = {
      quantity: item.quantity + 1,
    };

    updateItem(item.id, form);
  };

  const handleDeleteItem = async item => {
    const response = await actionCart.deleteItem(item.id);
    
    if (!response.status) {
      alert(response.error);
    }
  };

  const updateItem = async (cart_product_id, form) => {
    const response = await actionCart.updateItem(cart_product_id, form);

    if (!response.status) {
      alert(response.error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {cart.data?.cart_products?.map(item => (
        <div key={`cart_item_${item.id}`}>
          <CartItem
            item={item}
            onDecrease={handleDecreaseQuantity}
            onIncrease={handleIncreaseQuantity}
            onDelete={handleDeleteItem}
          />
          <Spacer />
        </div>
      ))}
    </div>
  );
};

export default CartList;
