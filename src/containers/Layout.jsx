import React from 'react';
import Header from '@components/Header';
import styles from '@styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles['main-container']}>{children}</main>
    </div>
  );
};

export default Layout;
