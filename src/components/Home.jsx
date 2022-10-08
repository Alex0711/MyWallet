import React from 'react';
import styles from '@styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles['Home-container']}>
        <p className={styles.message}>Welcome! This app was developed for the Alkemy challenge. Try to login, or create an account if you do not have one yet </p>
      </div>
    </div>
  );
};

export default Home;
