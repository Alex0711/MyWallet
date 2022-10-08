import { useEffect, useState } from 'react';
import { useOperation } from '@hooks/useOperation';
import Operation from '@components/Operation';
import { useRouter } from 'next/router';

export default function MyOperation() {
  const [operation, setOperation] = useState(null);
  const operations = useOperation();
  const router = useRouter();

  useEffect(() => {
    async function getOperation() {
      if (router.isReady) {
        const { id } = router.query;
        const data = await operations.getOperation(id);
        setOperation(data);
      }
    }
    try {
      getOperation();
    } catch (err) {
      console.error(err);
    }
  }, [router.isReady, operation?.amount, operation?.concept]);

  return <Operation operation={operation} />;
}
