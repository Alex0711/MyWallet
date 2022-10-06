import React, { useState } from 'react';
import Menu from '@components/Menu';
// import AppContext from '../context/AppContext';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const auth = useAuth();

  const userData = {
    email: auth?.user?.email,
    wallet: auth?.user?.wallet?.id,
  };
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles['navbar-left']}>
          <p>
            <Link href="/">MyWallet</Link>
          </p>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']}>{userData?.email && <>{userData?.email}</>}</li>
            <li className={styles['navbar-wallet']}>
              {userData?.email ? (
                <Image
                  onClick={() => setMenu(!menu)}
                  layout="fixed"
                  width={20}
                  height={20}
                  className={styles.eye}
                  src="http://drive.google.com/uc?export=view&id=1rMotb7L-_6nr-aoQa6BRQtTCI8fNPRIr"
                  alt="ojo"
                />
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
                  <Link href={'/signup'}>Sign up</Link>{' '}
                </p>
              )}
            </li>
          </ul>
        </div>
        {menu && <Menu />}
      </nav>
    </>
  );
};

export default Header;
