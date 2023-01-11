import React from 'react';
import Layout from '../../components/Layout';
import styles from './index.module.scss';
import TitlePage from '../../components/TitlePage';

const categories = [
  { label: 'Напої', value: 'Напої' },
  { label: 'Гарячі напої', value: 'Гарячі напої' },
  { label: 'Гарячі страви', value: 'Гарячі страви' },
  { label: 'Бургери', value: 'Бургери' },
  { label: 'М\'ясні страви', value: 'М\'ясні страви' },
  { label: 'Алкогольні напої', value: 'Алкогольні напої' },
];
const EatSettings = () => (
  <Layout>
    <>
      <TitlePage title="Налаштування меню" />
      <div className={styles.settings}>
        <div className={styles.categories}>
          <div className={styles.categories_create}>
            <h3 className={styles.categories_create__title}>Пошук/Створення</h3>
          </div>
          <div className={styles.categories_data}>
            <h3 className={styles.categories_data__title}>Категорії</h3>
            <hr className={styles.line} />
            <div className={styles.categories_list}>
              {categories.map((item) => (
                <div className={styles.categories_item} key={item.label}>{item.label}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.eat}>b</div>
      </div>
    </>
  </Layout>

);

export default EatSettings;
