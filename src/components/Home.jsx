import React, { useEffect, useState } from 'react';
import styles from '@styles/Home.module.scss';
import { useAuth } from '@hooks/useAuth';
import Cookie from 'js-cookie';

const Home = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setUserId(Cookie.get('userId'));
  }, []);

  const auth = useAuth();
  const userData = {
    wallet: auth?.user?.wallet?.id,
    money: auth?.user?.wallet?.money,
  };
  console.log(userId);
  console.log(typeof userId);

  if (userId === null) {
    return <>Loading...</>;
  } else if (userId === undefined) {
    return (
      <div className={styles.Home}>
        <div className={styles['Home-container']}>
          <p className={styles.message}>Welcome! This app was developed for the Alkemy challenge</p>
        </div>
      </div>
    );
  } else if (typeof userId === 'string') {
    return (
      <div className={styles.Home}>
        <div className={styles['Home-container']}>
          <p className={styles.message}> {userData.money} </p>
        </div>
      </div>
    );
  }
};

export default Home;
