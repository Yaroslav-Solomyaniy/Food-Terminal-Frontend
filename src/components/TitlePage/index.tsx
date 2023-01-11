import React from 'react';
import styles from './index.module.scss';

 interface ITitlePage{
   title: string;
   subtitle?: string;
   element?: JSX.Element | undefined;
 }
const TitlePage = ({ subtitle, title, element }:ITitlePage) => (
  <div className={styles.header}>
    <div className={styles.header_text}>
      <h1 className={styles.header_title}>{title}</h1>
      <h3 className={styles.header_subtitle}>{subtitle}</h3>
    </div>
    {element}
  </div>
);

TitlePage.defaultProps = {
  element: undefined,
  subtitle: '',
};

export default TitlePage;
