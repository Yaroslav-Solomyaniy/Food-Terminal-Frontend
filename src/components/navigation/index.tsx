import React from 'react';
import { Discount, Exit, Home, OrderList, Orders, Profile, Settings, Stats } from '../SVG';
import NavItem from './NavItem';
import styles from './index.module.scss';

interface IRoute{
  description: string;
  ico: JSX.Element;
  to: string;
  role: string[];
}

const Routes:IRoute[] = [
  {
    description: 'Меню їжі',
    to: '/menu',
    ico: <Home />,
    role: ['user', 'admin', 'moderator'],
  },
  {
    description: 'Закази клієнта',
    to: '/orders',
    ico: <Orders />,
    role: ['user'],
  },
  {
    description: 'Замовлення доступні адміністратору та модератору',
    to: '/order-list',
    ico: <OrderList />,
    role: ['moderator', 'admin'],
  },
  {
    description: 'Налаштування товарів',
    to: '/settings',
    ico: <Settings />,
    role: ['moderator', 'admin'],
  },
  {
    description: 'Налаштування дисконту',
    to: '/discount',
    ico: <Discount />,
    role: ['moderator', 'admin'],
  },
  {
    description: 'Статистика продаж',
    to: '/Stats',
    ico: <Stats />,
    role: ['admin'],
  },
];

const Navigation = () => (
  <div className={styles.navbar}>
    <div className={styles.user_links}>
      {Routes.filter((route) => route.role.includes('admin')).map((item) => (
        <NavItem key={item.to} to={item.to} ico={item.ico} />
      ))}
    </div>
    <div className={styles.default_link}>
      <NavItem to="/profile" ico={<Profile />} />
      <NavItem to="/" ico={<Exit />} />
    </div>
  </div>
);

export default Navigation;
