import { useEffect, useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import Operations from '@components/Operations';

export default function MyOperations() {
  const [operations, setOperations] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    setOperations(auth?.user?.wallet?.operations);
  }, [auth?.user?.wallet?.operations]);

  return <Operations operations={operations?.slice().reverse()} />;
}
