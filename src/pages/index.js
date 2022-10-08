import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useAuth } from '@hooks/useAuth';
import HomePage from '@components/Home';
import Wallet from '@components/Wallet';
import Operations from '@components/Operations';

export default function Home() {
  const [userId, setUserId] = useState(null);
  const [operations, setOperations] = useState(null);

  const auth = useAuth();
  const userData = {
    money: auth?.user?.wallet?.money,
  };

  useEffect(() => {
    async function getUser() {
      await auth.fetchUser();
      setOperations(auth?.user?.wallet?.operations);
    }
    try {
      getUser();
    } catch (error) {
      console.error(error);
    }
  }, [typeof operations]);

  useEffect(() => {
    setUserId(Cookies.get('userId'));
  }, []);

  if (userId === undefined) {
    return <HomePage />;
  }
  if (typeof userId === 'string') {
    return (
      <>
        <Wallet money={userData.money} />;
        <Operations operations={operations?.slice(-4).reverse()} />
      </>
    );
  }
}
