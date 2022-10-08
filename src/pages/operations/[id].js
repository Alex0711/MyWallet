import { useEffect, useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import Operation from '@components/Operation';
import { useRouter } from 'next/router';

export default function MyOperation() {
  const [operation, setOperation] = useState(null);
  const auth = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      const myOperation = auth?.user?.wallet?.operations.find((element) => element.id === id);
      setOperation(myOperation);
    }
  }, [router.isReady, router.query, auth?.user?.wallet?.operations]);

  return <Operation operation={operation} />;
}
