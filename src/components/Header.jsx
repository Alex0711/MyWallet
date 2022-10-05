import React, { useContext } from 'react';
// import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
// import AppContext from '../context/AppContext';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  // const { state, toggleMenu } = useContext(AppContext);
  const auth = useAuth();

  const userData = {
    email: auth?.user?.email,
    wallet: auth?.user?.wallet?.id,
  };
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles['navbar-left']}>
          <p>MyWallet</p>
          <ul>
            <li>{userData?.email && <p>Payments</p>}</li>
            <li>{userData?.email && <p>Entries</p>}</li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']} onClick={() => toggleMenu()}>
              {userData?.email && <p>{userData?.email}</p>}
            </li>
            <li className={styles['navbar-shopping-cart']}>
              {userData?.email ? (
                <p onClick={() => auth.logout()}>LogOut</p>
              ) : (
                <p>
                  <Link href={'/login'}>Log in</Link>
                </p>
              )}{' '}
            </li>
            <li className={styles['navbar-shopping-cart']}>
              {userData?.email ? (
                <div></div>
              ) : (
                <p>
                  {' '}
                  <Link href={'/signup'}>Sign up</Link>{' '}
                </p>
              )}
            </li>
          </ul>
        </div>
        {/* {state.menuIsOpen && <Menu />} */}
      </nav>
    </>
  );
};

export default Header;
