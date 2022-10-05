import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useAuth } from '@hooks/useAuth';
import HomePage from '@components/Home';
import Wallet from '@components/Wallet';

export default function Home() {
  const [userId, setUserId] = useState(null);

  const auth = useAuth();
  const userData = {
    wallet: auth?.user?.wallet?.id,
    money: auth?.user?.wallet?.money,
  };

  useEffect(() => {
    setUserId(Cookies.get('userId'));
  }, []);

  if (userId === undefined) {
    return <HomePage />;
  }
  if (typeof userId === 'string') {
    return <Wallet money={userData.money} />;
  }
}
