import React from 'react';

import HeaderNavbar from '@/components/headers/Navbar';

const LayoutMain = ({children}) => {
  return (
    <div>
      <HeaderNavbar brandName='Shopping Cart' />
      {children}
    </div>
  );
};

export default React.memo(LayoutMain);
