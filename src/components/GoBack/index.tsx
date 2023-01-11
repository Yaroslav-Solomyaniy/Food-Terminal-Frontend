import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import arrow from '../../img/arrow.png';

const GoHome = () => (

  <Link to="/" className={styles.link}>
    <div className={styles.title}>
      <img src={arrow} alt="Назад" className={styles.arrow} />
      Повернутись на головну
    </div>
  </Link>
);

export default GoHome;
