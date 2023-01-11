import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

const Title = () => (
  <div className={styles.title_block}>
    <h1 className={styles.title}>Food</h1>
    <h1 className={clsx(styles.title, styles.white_title)}>Terminal</h1>
  </div>
);

export default Title;
