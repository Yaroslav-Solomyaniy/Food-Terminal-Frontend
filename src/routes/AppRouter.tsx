import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
import AuthProvider from '../context/Auth';
import Menu from '../page/Menu';
import Profile from '../page/Profile';
import OrderList from '../page/OrderList';
import Stats from '../page/Stats';
import UserOrders from '../page/UserOrders';
import Settings from '../page/Settings';
import DiscountSettings from '../page/Discount';

const appRouter = () => (
  <Routes>
    <Route index element={<SignIn />} />
    <Route path="/registration" element={<AuthProvider><SignUp /></AuthProvider>} />

    <Route path="/menu" element={<Menu />} />
    <Route path="/profile" element={<Profile />} />

    <Route path="/orders" element={<UserOrders />} />

    <Route path="/Order-list" element={<OrderList />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/discount" element={<DiscountSettings />} />

    <Route path="/stats" element={<Stats />} />

  </Routes>
);

export default appRouter;
