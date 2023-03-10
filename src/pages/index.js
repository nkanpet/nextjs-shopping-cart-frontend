import React from 'react';

import ProductList from '@/containers/product/list';
import MainLayout from '@/containers/layouts/main';

const App = () => {
  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
};

export default App;
