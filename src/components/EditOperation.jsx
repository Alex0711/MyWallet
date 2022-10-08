import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useOperation } from '@hooks/useOperation';
import styles from '@styles/NewOperation.module.scss';

const EditOperation = ({ operation, setForm }) => {
  const operations = useOperation();
  const form = useRef(null);
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    setLoading('...');
    setErrorLogin(false);
    event.preventDefault();
    const formData = new FormData(form.current);
    const newOperation = {
      type: operation.type,
      concept: formData.get('concept'),
      amount: formData.get('amount'),
    };
    operations
      .update(operation.id, newOperation.type, newOperation.concept, newOperation.amount)
      .then(() => {
        setForm(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorLogin(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles['operation-form']}>
      <div className={styles['form-container']}>
        <Image
          onClick={() => setForm(false)}
          layout="fixed"
          width={20}
          height={20}
          className={styles.close}
          src="http://drive.google.com/uc?export=view&id=1NHR0VhB7RlM4dW9thiNCjU1NqgClOPLa"
          alt="X"
        />
        <form action="/" className={styles.form} ref={form}>
          <h1>Update {operation.type}</h1>
          <label htmlFor="concept" className={styles.label}>
            Concept
          </label>
          <select defaultValue={operation.concept} name="concept" className={`${styles.input} ${styles['input-concept']}`}>
            {operation.type === 'entry' ? (
              <>
                <option>salary</option>
                <option>sales</option>
              </>
            ) : (
              <>
                <option>food</option>
                <option>services</option>
                <option>clothing</option>
                <option id="entertainment">entertainment</option>
                <option>home</option>
                <option>health</option>
              </>
            )}
            <option>others</option>
          </select>
          <label htmlFor="amount" className={styles.label}>
            Amount
          </label>
          <input defaultValue={operation.amount} type="number" min="0" name="amount" className={`${styles.input} ${styles['input-amount']}`} />
          {errorLogin && <div className={styles.error}> {errorLogin} </div>}
          {loading && <div className={styles.loading}> {loading} </div>}
          <button onClick={submitHandler} className={`${styles['primary-button']} ${styles['login-button']}`}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditOperation;
