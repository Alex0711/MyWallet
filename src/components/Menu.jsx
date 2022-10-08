import React from 'react';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/Menu.module.scss';

const Menu = ({ setMenu }) => {
  const auth = useAuth();
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/operations" className={styles.title}>
            <p onClick={() => setMenu(false)}>Operations</p>
          </Link>
        </li>
        <li>
          <Link href="/payments">
            <p onClick={() => setMenu(false)}>Payments</p>
          </Link>
        </li>
        <li>
          <Link href="/entries">
            <p onClick={() => setMenu(false)}>Entries</p>
          </Link>
        </li>
        <li>
          <p onClick={() => auth.logout()}>Log out</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
