import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';
import Menu from '../page/Menu';
import Profile from '../page/Profile';
import OrderList from '../page/OrderList';
import Stats from '../page/Stats';
import UserOrders from '../page/UserOrders';
import Settings from '../page/Settings';
import DiscountSettings from '../page/Discount';
import { AuthContext } from '../context/Auth';

const appRouter = () => {
  const { user } = AuthContext();

  return (
    <>
      <ToastContainer />
      <Routes>
        {!user && (
          <>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </>
        )}
        {user && (
          <>
            <Route index path="/" element={<Menu />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<UserOrders />} />
            <Route path="/Order-list" element={<OrderList />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/discount" element={<DiscountSettings />} />
            <Route path="/stats" element={<Stats />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default appRouter;
