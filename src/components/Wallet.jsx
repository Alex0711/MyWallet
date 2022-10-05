import React, { useState } from 'react';
import styles from '@styles/MyWallet.module.scss';
import Image from 'next/image';
import OperationForm from './NewOperation';

function Wallet(money) {
  const [hide, setHide] = useState(false);
  const [form, setForm] = useState(false);

  return (
    <div className={styles['my-wallet']}>
      <div className={styles['my-wallet-container']}>
        <div className={styles['my-wallet-content']}>
          <div className={styles['money']}>
            <p className={styles.symbol}>$</p>
            <p className={styles['my-money']}>{hide ? '********' : money.money}</p>
          </div>
          <Image
            onClick={() => setHide(!hide)}
            layout="fixed"
            width={20}
            height={20}
            className={styles.eye}
            src="http://drive.google.com/uc?export=view&id=1GlPLDYLox4-Jm4RSBTcelMpO3LyO4_rm"
            alt="ojo"
          />
        </div>
      </div>
      <div className={styles['buttons-container']}>
        <button className={`${styles['primary-button']} ${styles.payment}`}>Payment</button>
        <button onClick={() => setForm(!form)} className={`${styles['primary-button']} ${styles.entry}`}>Entry</button>
      </div>
      {form && <OperationForm />}
    </div>
  );
}

export default Wallet;
