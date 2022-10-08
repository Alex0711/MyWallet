import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from './useAuth';
import endPoints from 'services/api';
import Cookies from 'js-cookie';

export const useOperation = () => {
  const [entries, setEntries] = useState(null);
  const [payments, setPayments] = useState(null);
  const router = useRouter();
  const auth = useAuth();
  const walletId = auth?.user?.wallet?.id;
  const options = {
    Headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };

  const post = async (type, concept, amount) => {
    await axios.post(endPoints.wallet.postOperation(walletId), { type, concept, amount }, options);
    location.reload();
  };

  const deleteOperation = async (id) => {
    await axios.delete(endPoints.wallet.deleletOperation(id), options);
    await router.push('/');
    location.reload();
  };

  const update = async (id, type, concept, amount) => {
    await axios.patch(endPoints.wallet.patchOperation(id), { type, concept, amount }, options);
    location.reload();
  };

  const getEntries = useCallback(async () => {
    if (auth?.user?.id) {
      const { data } = await axios.get(endPoints.wallet.getEntries(auth?.user?.id));
      setEntries(data.wallet.operations);
    }
  }, [auth?.user?.id]);

  const getPayments = useCallback(async () => {
    if (auth?.user?.id) {
      const { data } = await axios.get(endPoints.wallet.getPayments(auth?.user?.id));
      setPayments(data.wallet.operations);
    }
  }, [auth?.user?.id]);

  const getOperation = async (id) => {
    try {
      const token = Cookies.get('token');

      if (token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        const { data } = await axios.get(endPoints.wallet.getOperation(id));
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEntries();
    getPayments();
  }, [auth?.user?.id, getEntries, getPayments]);

  return { post, deleteOperation, update, getOperation, entries, payments };
};
