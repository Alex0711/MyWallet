import React, { useState, useContext, createContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from 'services/api';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      const token = Cookie.get('token');
      const userId = Cookie.get('userId');

      if (token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await axios.get(endPoints.user.getUser(userId));
        setUser(user);
      }
    } catch (error) {
      setUser(null);
      throw error;
    }
  }, []);

  const signIn = async (email, password) => {
    const options = {
      Headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(endPoints.login, { email, password }, options);
    if (data.token) {
      Cookie.set('token', data.token, { expires: 10 });
      Cookie.set('userId', data.user.id, { expires: 10 });
      fetchUser();
    }
  };

  const signUp = async (email, password, confirmPassword) => {
    const options = {
      Headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(endPoints.users, { email, password, confirmPassword }, options);
    if (data.message === 'Created') {
      signIn(email, password);
    }
  };

  const logout = async () => {
    Cookie.remove('token');
    Cookie.remove('userId');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    router.push('/');
    location.reload();
  };

  useEffect(() => {
    return fetchUser;
  }, [fetchUser]);

  return {
    user,
    signIn,
    logout,
    signUp,
    fetchUser,
  };
}
