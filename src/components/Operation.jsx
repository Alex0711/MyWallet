import dayjs from 'dayjs';
import { useState } from 'react';
import { useOperation } from '@hooks/useOperation';
import EditOperation from './EditOperation';
import styles from '@styles/Operation.module.scss';

const Operation = ({ operation }) => {
  const [form, setForm] = useState(false);
  const op = useOperation();
  const date = dayjs(operation?.createdAt).format('DD/MM/YYYY HH:mm:ss');
  if (operation) {
    return (
      <div className={styles['my-operations']}>
        <div className={styles['my-operation-container']}>
          <p className={styles.type}>{operation.type}</p>
          <div className={styles.conecpt}>
            <p>Concept:</p>
            <p>{operation.concept}</p>
          </div>
          <div className={styles.date}>
            <p>Date:</p>
            <p>{date.slice(0, 11)}</p>
          </div>
          <div className={styles.hour}>
            <p>Hour:</p>
            <p>{date.slice(11)}</p>
          </div>
          <div className={styles.amount}>
            <p>Amount:</p>
            <p>$ {operation.amount}</p>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => op.deleteOperation(operation.id)} className={`${styles['primary-button']} ${styles.delete}`}>
              delete
            </button>
            <button onClick={() => setForm(!form)} className={`${styles['primary-button']} ${styles.edit}`}>
              edit
            </button>
          </div>
        </div>
        {form && <EditOperation operation={operation} setForm={setForm} />}
      </div>
    );
  }
};

export default Operation;
