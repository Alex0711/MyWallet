import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@styles/Login.module.scss';
import { useAuth } from '@hooks/useAuth';

const Login = () => {
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
    };
    auth
      .signIn(data.email, data.password)
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        if (error.code === 'ERR_BAD_REQUEST') {
          setErrorLogin('Invalid email or password');
        } else {
          console.log(error);
          setErrorLogin(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.Login}>
      <div className={styles['Login-container']}>
        <form action="/" className={styles.form} ref={form}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input type="text" name="email" placeholder="example@example.com" className={`${styles.input} ${styles['input-email']}`} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input type="password" name="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
          {errorLogin && <div className={styles.error}> {errorLogin} </div>}
          {loading && <div className={styles.loading}> {loading} </div>}
          <button onClick={submitHandler} className={`${styles['primary-button']} ${styles['login-button']}`}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
