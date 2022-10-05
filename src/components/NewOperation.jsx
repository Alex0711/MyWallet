import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Login.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import { useAuth } from '@hooks/useAuth';

const OperationForm = () => {
  const form = useRef(null);
  const auth = useAuth();
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = (event) => {
    setLoading('...');
    setErrorLogin(false);
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirm password'),
    };
    auth
      .signUp(data.email, data.password, data.confirmPassword)
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.message === 'email must be unique') {
          setErrorLogin('An account already exists with this email');
        } else {
          setErrorLogin(error.response.data.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.form}>
      <div className={styles['form-container']}>
        <img src={logo} alt="logo" className={styles.logo} />
        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" name="email" placeholder="example@example.com" className={`${styles.input} ${styles['input-email']}`} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" name="confirm password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
          {errorLogin && <div className={styles.error}> {errorLogin} </div>}
          {loading && <div className={styles.loading}> {loading} </div>}
          <button onClick={submitHandler} className={`${styles['primary-button']} ${styles['login-button']}`}>
            Sign UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OperationForm;
