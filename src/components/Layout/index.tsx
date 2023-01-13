import React from 'react';
import styles from './index.module.scss';
import Navigation from '../navigation';

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => (
  <div className={styles.layout}>
    <div className={styles.menu}>
      <Navigation />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Layout;
