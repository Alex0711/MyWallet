import React from 'react';
import styles from '@styles/Operations.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

const Operations = ({ operations }) => {
  if (operations) {
    return (
      <div className={styles['my-operations']}>
        <div className={styles['my-operation-container']}>
          {operations?.map((operation) => (
            <div key={operation.id} className={styles['my-operation-content']}>
              {operation.type === 'entry' ? (
                <Image width={22} height={22} layout="fixed" src="http://drive.google.com/uc?export=view&id=1xJ4DUKtthDHl3PWDl8-EGKvkpowG3fBj" alt={operation.type} />
              ) : (
                <Image width={20} height={20} layout="fixed" src="http://drive.google.com/uc?export=view&id=16PT85g33khugZ2IgabsQVMfnRxNdsy-Z" alt={operation.type} />
              )}
              <div className={styles['operation-left']}>
                <p>
                  <span className={styles.date}>{operation.type}</span>
                  <span className={styles.concept}>{operation.concept}</span>
                </p>
              </div>
              <div className={styles.right}>
                <p className={styles.date}> {dayjs(operation.createdAt).format('DD/MM/YYYY')} </p>
                <div className={styles['right-amount-arrow']}>
                  <p className={styles['right-amount']}>$ {operation.amount}</p>
                  <Link href={`/operations/${operation.id}`}>
                    <div>
                      <Image width={20} height={20} layout="fixed" src="http://drive.google.com/uc?export=view&id=1Ib0mBTWs8veCIJhcjCB2Fc2DtCDdaVMA" alt="arrow" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Operations;
