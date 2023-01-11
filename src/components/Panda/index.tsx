import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';
import panda from '../../img/panda.png';
import stick from '../../img/stick.svg';

interface IPanda {
  nameClass?: string;
}

const Panda = ({ nameClass }: IPanda): JSX.Element => (
  <div className={clsx(styles.object, styles.animate, nameClass)}>
    <img src={panda} alt="panda" className={styles.panda} />
    <img src={stick} alt="stick" className={styles.stick} />
    <div className={styles.flag}>
      <div className={styles.flag_food}>Food</div>
      <div className={styles.flag_terminal}>Terminal</div>
    </div>
  </div>
);

Panda.defaultProps = {
  nameClass: '',
};
export default Panda;
