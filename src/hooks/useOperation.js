import axios from 'axios';
import { useAuth } from './useAuth';
import endPoints from 'services/api';

export const useOperation = () => {
  const auth = useAuth();
  const walletId = auth?.user?.wallet?.id;

  const post = async (type, concept, amount) => {
    const options = {
      Headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(endPoints.wallet.postOperation(walletId), { type, concept, amount }, options);
    location.reload();
    console.log('data en useOperation: ', data);
  };
  return { post };
};
