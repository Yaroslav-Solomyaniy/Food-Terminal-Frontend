import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import styles from './index.module.scss';

interface INavItem {
  to: string;
  ico: JSX.Element;
}

const NavItem = ({ to, ico }: INavItem) => {
  const [isActive, setIsActive] = useState<boolean>();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === to) {
      setIsActive(true);
    }
  }, [location.pathname, to]);

  return (
    <div className={clsx(styles.box, isActive && styles.active_box)}>
      <NavLink
        to={to}
        className={clsx(styles.link, isActive && styles.active_link)}
      >
        {ico}
      </NavLink>
    </div>
  );
};

NavItem.defaultProps = {
  isLogOut: false,
};

export default NavItem;
