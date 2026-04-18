import React from 'react';

import { Outlet } from 'react-router';
import Navber from '../components/shared/Navber/Navber';

const MainLayout = () => {
    return (
      <div>
        <Navber />
        <Outlet />
      </div>
    );
};

export default MainLayout;