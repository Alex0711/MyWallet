import React from 'react';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
  const auth = useAuth();
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href="/operations" className={styles.title}>
            Operations
          </Link>
        </li>
        <li>
          <Link href="/payments">Payments</Link>
        </li>
        <li>
          <Link href="/entries">Entries</Link>
        </li>
        <li>
          <p onClick={() => auth.logout()}>Log out</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
