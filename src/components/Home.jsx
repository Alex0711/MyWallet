import React, { useEffect, useState } from 'react';
import styles from '@styles/Home.module.scss';
import { useAuth } from '@hooks/useAuth';
import Cookie from 'js-cookie';

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles['Home-container']}>
        <p className={styles.message}>Welcome! This app was developed for the Alkemy challenge</p>
      </div>
    </div>
  );
};

export default Home;
